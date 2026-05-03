import Section from "../components/SectionWrapper";
import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "pusalaspreetham@email.com",
    href: "mailto:pusalaspreetham@email.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6 12 13 2 6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/pusalaspreetham-code",
    href: "https://github.com/pusalaspreetham-code",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12 24 5.4 18.6 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pusala-preetham",
    href: "https://www.linkedin.com/in/pusala-preetham-3b2ba533a/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.4v6.2zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1c0 1.2-1 2.1-2.1 2.1zm1.8 13H3.5V9h3.6v11.4z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xykoknol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="border-t border-cream-200 dark:border-ink-700">
      
      <h2 className="text-4xl font-bold mb-2">Let's talk</h2>
      <p className="mb-8 text-ink-400">Open to internships or collaborations.</p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="space-y-6">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 group">
              
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-ink-800 text-white group-hover:scale-110 transition">
                {link.icon}
              </div>

              <div>
                <p className="text-xs text-ink-400">{link.label}</p>
                <p className="text-white">{link.value}</p>
              </div>

            </a>
          ))}
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#111] border border-ink-700 rounded-2xl p-6">

          {status === "success" ? (
            <div className="text-center py-10">
              <p className="text-green-400 text-lg font-semibold">Message sent successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full p-3 rounded-xl bg-black border border-ink-700 text-white"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full p-3 rounded-xl bg-black border border-ink-700 text-white"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your message"
                required
                className="w-full p-3 rounded-xl bg-black border border-ink-700 text-white"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl bg-cream-200 text-black font-medium hover:bg-cream-100 transition"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

            </form>
          )}

        </div>
      </div>
    </Section>
  );
}