'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="contact" ref={ref} className="py-32 md:py-40 relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#c9a227] text-sm uppercase tracking-[0.4em] block mb-6"
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-7xl font-medium mb-8"
        >
          Let's Create Something Iconic
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          Available for collaborations, bookings, and creative projects worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <a
            href={`mailto:${portfolio.email}`}
            className="group flex flex-col items-center gap-2 p-6 border border-zinc-800 hover:border-[#c9a227] transition-colors min-w-[200px]"
          >
            <span className="text-zinc-500 text-sm uppercase tracking-wider">Email</span>
            <span className="text-white group-hover:text-[#c9a227] transition-colors">
              {portfolio.email}
            </span>
          </a>
          <a
            href={portfolio.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 p-6 border border-zinc-800 hover:border-[#c9a227] transition-colors min-w-[200px]"
          >
            <span className="text-zinc-500 text-sm uppercase tracking-wider">Instagram</span>
            <span className="text-white group-hover:text-[#c9a227] transition-colors">
              {portfolio.instagram}
            </span>
          </a>
          <div className="flex flex-col items-center gap-2 p-6 border border-zinc-800 min-w-[200px]">
            <span className="text-zinc-500 text-sm uppercase tracking-wider">Location</span>
            <span className="text-white">{portfolio.location}</span>
            <span className="text-[#c9a227] text-sm">{portfolio.locationNote}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-16 border-t border-zinc-800"
        >
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} The Juwonlo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
