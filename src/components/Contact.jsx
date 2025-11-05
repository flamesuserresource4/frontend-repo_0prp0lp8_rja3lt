import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Let’s build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-2 text-center text-white/70"
        >
          Tell me about your idea and I’ll get back within 24 hours.
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 grid max-w-xl gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-teal-500/40 focus:ring-2"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-teal-500/40 focus:ring-2"
                placeholder="jane@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-teal-500/40 focus:ring-2"
              placeholder="What are we building?"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            <Mail size={18} className="transition group-hover:translate-x-0.5" />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
