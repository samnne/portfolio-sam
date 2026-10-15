import { motion } from "motion/react";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  FaCheck,
  FaCopy,
  FaGithub,
  FaLinkedin,
  FaPaperclip,
  FaPaperPlane,
} from "react-icons/fa";

const EMAIL = "samuel.n.echefu@gmail.com";

const topics = [
  "Internship opportunity",
  "Project collaboration",
  "Question about my work",
  "Just saying hi",
];

const variants = {
  button: {
    scale: 1.08,
    padding: "0.5rem 1rem",
    border: "1px solid #4ec0d5",
    background: "white",
    color: "#4ec0d5",
  },
};

const links = [
  { label: "Github", href: "https://github.com/samnne", icon: <FaGithub /> },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/samuel-echefu-251a21336/",
    icon: <FaLinkedin />,
  },
  {
    label: "Resume",
    href: "/portfolio-sam/Samuel_Echefu_Full_Stack_Resume.pdf",
    icon: <FaPaperclip />,
  },
];

const Contact = () => {
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `${topic}${name ? ` from ${name}` : ""}`;
    const body = `${message}${name ? `\n\n${name}` : ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full bg-background border border-accent-dark rounded-md p-3 text-text-primary placeholder:text-accent-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all";

  return (
    <section
      id="contact"
      className="min-h-screen m-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center container gap-12 py-16"
    >
      <div className="flex flex-col items-start gap-6">
        <h1 className="md:text-6xl text-4xl font-bold">Let's work together!</h1>
        <p className="text-2xl font-light max-sm:text-lg">
          I'm looking for Software Engineering internships for Spring 2027, and
          I'm always up for a conversation about health tech, accessibility, or
          real-time systems. Pick a topic, send a quick note, and I'll get back
          to you.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-lg max-sm:text-sm break-all">{EMAIL}</span>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="flex items-center gap-2 border border-accent text-accent px-3 py-1 rounded-md cursor-pointer hover:bg-accent hover:text-background transition-all duration-300"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            <span aria-live="polite">{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>

        <div className="flex max-xl:flex-wrap w-full gap-4">
          {links.map(({ label, href, icon }) => (
            <motion.a
              key={label}
              initial={{ padding: "0.5rem" }}
              href={href}
              target="_blank"
              variants={variants}
              whileTap="button"
              whileHover="button"
              whileFocus="button"
              role="button"
              className="button-home"
            >
              {label} {icon}
            </motion.a>
          ))}
        </div>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", mass: 0.4 }}
        className=" border border-accent-dark rounded-xl p-6 sm:p-8 flex flex-col gap-5"
      >
        <fieldset className="flex flex-col gap-3">
          <legend className="text-xl font-bold text-text-primary mb-1">
            What would you like to talk about?
          </legend>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={topic === t}
                onClick={() => setTopic(t)}
                className={`px-3 py-1.5 rounded-full text-sm border cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                  topic === t
                    ? "bg-accent text-background border-accent font-bold"
                    : "border-accent-dark text-text-primary hover:border-accent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="font-medium">
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            autoComplete="name"
            className={field}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me a bit about the role or idea..."
            rows={5}
            required
            className={`${field} resize-none`}
          />
        </div>

        <button type="submit" className="button-home self-start">
          Send Email <FaPaperPlane />
        </button>
        <p className="text-sm text-accent-dark">
          This opens your email app with everything filled in.
        </p>
      </motion.form>
    </section>
  );
};

export default Contact;
