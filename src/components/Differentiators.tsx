'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

export default function Differentiators() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-32 md:py-40 relative bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#c9a227] text-sm uppercase tracking-[0.4em] block mb-4">
            What Sets Me Apart
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium">
            Exclusivity · Depth · Strategy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolio.differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-8 bg-[#141414] border border-zinc-800/50 hover:border-[#c9a227]/40 transition-colors group"
            >
              <h3 className="text-[#c9a227] font-[family-name:var(--font-playfair)] text-2xl font-medium mb-4 group-hover:scale-105 transition-transform">
                {item.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
