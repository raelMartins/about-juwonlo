'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const HeroBackground = dynamic(() => import('./HeroBackground'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#c9a227] text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-[family-name:var(--font-outfit)]"
        >
          Visual Creative
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
        >
          THE JUWONLO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-[family-name:var(--font-outfit)]"
        >
          Creative Strategist · Cinematographer · Visual Storyteller
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="#work"
            className="group px-8 py-4 bg-[#c9a227] text-[#0a0a0a] font-medium uppercase tracking-wider hover:bg-[#d4af37] transition-colors duration-300 flex items-center gap-2"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-zinc-600 text-zinc-300 uppercase tracking-wider hover:border-[#c9a227] hover:text-[#c9a227] transition-colors duration-300"
          >
            Let&apos;s Create
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-400"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
