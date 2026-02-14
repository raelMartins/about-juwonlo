'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-32 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#c9a227] text-sm uppercase tracking-[0.4em] block mb-4">
            Experience
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium">
            Selected Projects
          </h2>
        </motion.div>

        <div className="space-y-12">
          {portfolio.experience.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.project}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group border-b border-zinc-800/50 pb-12 last:border-0 hover:border-[#c9a227]/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-[#c9a227] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-[#c9a227] font-[family-name:var(--font-playfair)] text-lg mt-1">
                    {exp.project}
                    {exp.location && ` · ${exp.location}`}
                  </p>
                </div>
                <p className="text-zinc-400 md:max-w-md leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
