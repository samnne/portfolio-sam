import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { Job, ProjectCard } from '../types/global.js'

type WorkModalProps = {
    item: Job | ProjectCard
    onClose: () => void
}

const isJob = (item: Job | ProjectCard): item is Job => 'company' in item

const Divider = () => <div className="h-px w-full self-center bg-white/20 my-4"></div>

const WorkCard = ({ item, onClose }: WorkModalProps) => {
    const closeRef = useRef<HTMLButtonElement>(null)
    const reduceMotion = useReducedMotion()

    const job = isJob(item)
    const title = job ? item.company : item.name
    const subtitle = job ? item.role : null
    const tags = job ? item.tags : item.code
    const image = job ? item.image : item.imgURL
    const links = (job
        ? [{ label: 'visit', href: item.link }]
        : [
            { label: 'code', href: item.repo },
            { label: 'live', href: item.website },
        ]
    ).filter(l => l.href)

    // with reduced motion on, keep the fades but drop the movement and scaling
    const offset = reduceMotion ? 0 : 24
    const scale = reduceMotion ? 1 : 0.98

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.2, delay: 0.05 } },
    }

    // children inherit the hidden / visible / exit labels from the backdrop
    const panelVariants: Variants = {
        hidden: { opacity: 0, y: offset, scale },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.28,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            y: offset / 2,
            scale,
            transition: { duration: 0.18, ease: 'easeIn' },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
    }

    const listVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
    }

    // escape to close, lock scroll, move focus in, and restore it to the card on close
    useEffect(() => {
        const trigger = document.activeElement as HTMLElement | null
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        closeRef.current?.focus()
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
            trigger?.focus()
        }
    }, [onClose])

    // portal so the sticky/grid ancestors on the page can't clip or offset the overlay
    return createPortal(
        <LazyMotion features={domAnimation} strict>
            <m.div
                className="fixed  inset-0 z-50 flex items-center justify-center bg-white/70 px-5"
                onClick={onClose}
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <m.div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="work-modal-title"
                    onClick={e => e.stopPropagation()}
                    variants={panelVariants}
                    className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white border border-white/20 p-5 font-inter"
                >
                    <m.div variants={itemVariants} className="flex justify-between items-start gap-4">
                        <div className="flex gap-2">
                            {item.logo && (
                                <img
                                    className="w-15 h-15 rounded-sm"
                                    src={item.logo}
                                    alt=""
                                    width={60}
                                    height={60}
                                    decoding="async"
                                />
                            )}
                            <div>
                                <h2 id="work-modal-title" className="text-2xl font-bold">{title}</h2>
                                {subtitle && <p className="text-sm mt-1">{subtitle}</p>}
                            </div>
                        </div>
                        <button
                            ref={closeRef}
                            type="button"
                            onClick={onClose}
                            className="link font-light"
                        >
                            close
                        </button>
                    </m.div>

                    {job && (
                        <m.div
                            variants={itemVariants}
                            className="flex justify-between text-sm text-background/50 mt-2"
                        >
                            <span>{item.dateRange}</span>
                            <span>{item.location}</span>
                        </m.div>
                    )}

                    <Divider />

                    {image && (
                        <m.img
                            variants={itemVariants}
                            src={image}
                            alt={`${title} preview`}
                            decoding="async"
                            className="w-full max-h-80 object-contain border border-background/20 mb-4"
                        />
                    )}

                    {job ? (
                        <m.ul
                            variants={listVariants}
                            className="flex flex-col gap-2 text-sm list-disc pl-5"
                        >
                            {item.bullets.map((bullet, i) => (
                                <m.li key={i} variants={itemVariants}>{bullet}</m.li>
                            ))}
                        </m.ul>
                    ) : (
                        <m.p
                            variants={itemVariants}
                            className="text-sm text-background/70 whitespace-pre-line"
                        >
                            {item.description}
                        </m.p>
                    )}

                    <m.div
                        variants={listVariants}
                        className="flex flex-wrap items-center gap-1 mt-4"
                    >
                        {tags.map(tag => (
                            <m.span
                                key={tag}
                                variants={itemVariants}
                                className="font-bold bg-white text-black p-1 text-xs"
                            >
                                {tag}
                            </m.span>
                        ))}
                    </m.div>

                    {links.length > 0 && (
                        <>
                            <Divider />
                            <m.div variants={itemVariants} className="flex gap-4 text-sm">
                                {links.map(l => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="link"
                                    >
                                        {l.label}
                                    </a>
                                ))}
                            </m.div>
                        </>
                    )}
                </m.div>
            </m.div>
        </LazyMotion>,
        document.body
    )
}

export default WorkCard