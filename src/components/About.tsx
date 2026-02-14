'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { portfolio } from '@/data/portfolio';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            style={{ y, opacity }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/juwonlo_profile_image.jpeg"
              alt="The Juwonlo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 border border-[#c9a227]/30 -ml-6 -mb-6" />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#c9a227] text-sm uppercase tracking-[0.4em] block mb-6"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
            >
              Bridging visions
              <br />
              <span className="text-[#c9a227]">through the lens</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 leading-relaxed text-lg mb-8"
            >
              {portfolio.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="px-4 py-2 bg-[#141414] border border-zinc-800">
                <span className="text-zinc-500 text-sm">Based in</span>
                <p className="text-white font-medium">{portfolio.location}</p>
              </div>
              <div className="px-4 py-2 bg-[#141414] border border-zinc-800">
                <span className="text-zinc-500 text-sm">Available</span>
                <p className="text-[#c9a227] font-medium">{portfolio.locationNote}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
