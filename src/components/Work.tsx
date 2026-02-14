'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { portfolio } from '@/data/portfolio';

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    if (selectedIndex !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => {});
    play();
    video.addEventListener('loadeddata', play);
    return () => video.removeEventListener('loadeddata', play);
  }, []);

  return (
    <section id="work" ref={ref} className="py-32 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#c9a227] text-sm uppercase tracking-[0.4em] block mb-4">
            Selected Work
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium">
            Exhibition & Gallery
          </h2>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative aspect-video overflow-hidden group">
            <video
              ref={videoRef}
              src={portfolio.video}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay
            />
            <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex items-end justify-between">
              <div>
                <p className="text-white/90 text-sm uppercase tracking-widest mb-1">
                  Cinematography Reel
                </p>
                <p className="text-[#c9a227]/90 font-[family-name:var(--font-playfair)] text-lg">
                  Snippet · Motion
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.media.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(0.1 * index, 0.6) }}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
              role="button"
              tabIndex={0}
            >
              <div className="relative aspect-[4/5] md:aspect-square">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-[#c9a227] font-[family-name:var(--font-playfair)] text-lg font-medium mb-2">
                      {item.title}
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed max-w-md">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && selectedIndex >= 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full aspect-[4/5] md:aspect-video"
              >
                <Image
                  src={portfolio.media[selectedIndex]?.src || ''}
                  alt={portfolio.media[selectedIndex]?.title || ''}
                  fill
                  className="object-contain"
                />
              </motion.div>
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-8 right-8 text-white/80 hover:text-white text-4xl"
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
