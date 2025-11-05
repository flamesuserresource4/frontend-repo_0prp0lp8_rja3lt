import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nebula UI Kit',
    desc: 'A motion-first component kit for modern dashboards.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Astra 3D Playground',
    desc: 'Interactive 3D experiments powered by WebGL and Spline.',
    tags: ['Spline', 'Three.js', 'UX'],
    link: '#',
  },
  {
    title: 'Pulse Analytics',
    desc: 'Realtime product analytics with sleek visualizations.',
    tags: ['FastAPI', 'MongoDB', 'Viz'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-zinc-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold md:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-2 max-w-2xl text-white/70"
        >
          A selection of work exploring performance, motion, and interactivity.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -6, rotateX: 1 }}
              whileTap={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5"
            >
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-teal-500/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-0 pointer-events-none" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ExternalLink className="text-white/50 group-hover:text-white" size={18} />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
