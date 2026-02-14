'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="philosophy" ref={ref} className="py-32 md:py-40 relative bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#c9a227] text-sm uppercase tracking-[0.4em] block mb-6"
        >
          Philosophy & Approach
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-12 leading-tight"
        >
          I don't just film.
          <br />
          <span className="text-[#c9a227]">I frame visions.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl leading-relaxed"
        >
          {portfolio.philosophy}
        </motion.p>
      </div>
    </section>
  );
}
