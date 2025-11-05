import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <Rocket size={14} className="text-teal-300" /> Interactive 3D Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Crafting playful, modern, tech-driven experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-base text-white/80 sm:text-lg"
          >
            I build fast, delightful interfaces with rich motion and 3D interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-md bg-teal-500 px-5 py-3 font-medium text-black shadow-lg shadow-teal-500/20 transition hover:bg-teal-400"
            >
              View Projects
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
