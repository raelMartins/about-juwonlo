'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-[#c9a227] text-sm uppercase tracking-[0.4em] block mb-8 text-center"
        >
          Core Skills
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {portfolio.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="px-5 py-2.5 border border-zinc-700/50 text-zinc-400 text-sm uppercase tracking-wider hover:border-[#c9a227]/50 hover:text-[#c9a227] transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
