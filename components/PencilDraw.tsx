import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
} from "framer-motion";
import type { Variants } from "framer-motion";


const panelVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",

    transition: {
      duration: 0.25,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.04,
      type: "spring"
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.4, ease: "circInOut", type:"spring" },
  },
};

const popVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};
type Point = { x: number; y: number };
type Stroke = { color: string; size: number; seed: number; points: Point[] };

const COLORS = [
  { name: "primary", value: "#b1e594" },
  { name: "secondary", value: "#20886c" },
  { name: "red", value: "#ef4444" },
  { name: "accent", value: "#4ec0d5" },
];

// deterministic noise so a stroke looks identical when it is redrawn
const rand = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

// a jittered point for a given pass, which makes the line wobble like graphite
const jitterPoint = (
  s: Stroke,
  i: number,
  pass: number,
  amp: number,
): Point => {
  const p = s.points[i];
  return {
    x: p.x + (rand(s.seed + i * 3.1 + pass * 7.7) - 0.5) * amp,
    y: p.y + (rand(s.seed + i * 5.3 + pass * 11.3) - 0.5) * amp,
  };
};

const PASSES = [
  { width: 1, alpha: 0.3, jitter: 1.4 },
  { width: 0.55, alpha: 0.5, jitter: 0.9 },
  { width: 0.3, alpha: 0.7, jitter: 0.5 },
];

const drawSegment = (ctx: CanvasRenderingContext2D, s: Stroke, i: number) => {
  ctx.strokeStyle = s.color;
  ctx.fillStyle = s.color;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (i === 0) {
    const p = s.points[0];
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(p.x, p.y, s.size * 0.4, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  PASSES.forEach((pass, k) => {
    const a = jitterPoint(s, i - 1, k, pass.jitter * s.size * 0.4);
    const b = jitterPoint(s, i, k, pass.jitter * s.size * 0.4);
    ctx.globalAlpha = pass.alpha;
    ctx.lineWidth = s.size * pass.width;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  });

  // paper grain: a few specks scattered around the line
  const p = s.points[i];
  ctx.globalAlpha = 0.5;
  for (let g = 0; g < 3; g++) {
    const ox = (rand(s.seed + i * 17 + g) - 0.5) * s.size * 1.6;
    const oy = (rand(s.seed + i * 19 + g * 3) - 0.5) * s.size * 1.6;
    ctx.fillRect(p.x + ox, p.y + oy, 1, 1);
  }
};

const PencilDraw = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokes = useRef<Stroke[]>([]);
  const current = useRef<Stroke | null>(null);

  const [enabled, setEnabled] = useState(false);
  const [color, setColor] = useState(COLORS[0].value);
  const [size, setSize] = useState(3);
  const [count, setCount] = useState(0);

const redraw = useCallback(() => {
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx) return;
  // reset the transform so the clear covers every device pixel, then restore it
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  strokes.current.forEach((s) =>
    s.points.forEach((_, i) => drawSegment(ctx, s, i)),
  );
  ctx.globalAlpha = 1;
}, []);

  // size the canvas to the page; resizing clears it, so redraw afterwards
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = Math.max(document.documentElement.clientWidth, document.documentElement.scrollWidth);
      const h = document.body.offsetHeight;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);
      redraw();
    };

    resize();
    // observe the body, not the document, so the canvas can't feed back into its own size
    const ro = new ResizeObserver(resize);
    ro.observe(document.body);
    window.addEventListener("resize", resize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [redraw]);

  const undo = useCallback(() => {
    strokes.current.pop();
    setCount(strokes.current.length);
    redraw();
  }, [redraw]);

  const clear = () => {
    strokes.current = [];
    setCount(0);
    redraw();
  };

  // escape turns drawing off, ctrl/cmd+z undoes while drawing
  useEffect(() => {
    if (!enabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEnabled(false);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        undo();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [enabled, undo]);

  const toPoint = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const stroke: Stroke = {
      color,
      size,
      seed: Math.random() * 10000,
      points: [toPoint(e)],
    };
    current.current = stroke;
    const ctx = e.currentTarget.getContext("2d");
    if (ctx) drawSegment(ctx, stroke, 0);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const stroke = current.current;
    const ctx = e.currentTarget.getContext("2d");
    if (!stroke || !ctx) return;
    stroke.points.push(toPoint(e));
    drawSegment(ctx, stroke, stroke.points.length - 1);
  };

  const endStroke = () => {
    if (!current.current) return;
    strokes.current.push(current.current);
    current.current = null;
    setCount(strokes.current.length);
  };

  return (
    <>
      {createPortal(
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endStroke}
          onPointerCancel={endStroke}
          className="absolute top-0 left-0 z-40"
          style={{
            pointerEvents: enabled ? "auto" : "none",
            touchAction: enabled ? "none" : "auto",
            cursor: enabled ? "crosshair" : "default",
          }}
        />,
        document.body,
      )}

      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <m.div
            role="toolbar"
            aria-label="drawing controls"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-3 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center bg-white border border-background/20 rounded-full px-3 py-3 text-xs lowercase font-google shadow-md shadow-black/30"
          >
            <m.button
              type="button"
              onClick={() => setEnabled((v) => !v)}
              aria-pressed={enabled}
              whileTap={{ scale: 0.92 }}
              className="link justify-center"
            >
              <span className="text-accent font-black">[</span>{" "}
              {enabled ? "drawing" : "draw"}{" "}
              <span className="text-accent font-black">]</span>
            </m.button>

            <AnimatePresence initial={false}>
              {enabled && (
                <m.div
                  key="controls"
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden w-full"
                >
                  <div className="flex flex-col items-center gap-3 pt-3 px-1 pb-1">
                    <div
                      className="flex flex-col items-center gap-2"
                      role="group"
                      aria-label="color"
                    >
                      {COLORS.map((c) => (
                        <m.button
                          key={c.value}
                          type="button"
                          variants={popVariants}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setColor(c.value)}
                          aria-label={c.name}
                          aria-pressed={color === c.value}
                          className={`h-6 w-6 rounded-full border border-background/20 ${
                            color === c.value
                              ? "ring-2 ring-accent ring-offset-2 ring-offset-white"
                              : ""
                          }`}
                          style={{ backgroundColor: c.value }}
                        />
                      ))}
                    </div>

                    <m.label
                      variants={popVariants}
                      className="flex flex-col items-center gap-1 text-background/60"
                    >
                      size
                      <input
                        type="range"
                        min={1}
                        max={12}
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="w-14 accent-black"
                      />
                    </m.label>

                    <m.button
                      variants={popVariants}
                      whileTap={{ scale: 0.92 }}
                      type="button"
                      onClick={undo}
                      disabled={count === 0}
                      className="link justify-center disabled:opacity-30"
                    >
                      undo
                    </m.button>
                    <m.button
                      variants={popVariants}
                      whileTap={{ scale: 0.92 }}
                      type="button"
                      onClick={clear}
                      disabled={count === 0}
                      className="link justify-center disabled:opacity-30"
                    >
                      clear
                    </m.button>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </m.div>
        </MotionConfig>
      </LazyMotion>
    </>
  );
};

export default PencilDraw;
