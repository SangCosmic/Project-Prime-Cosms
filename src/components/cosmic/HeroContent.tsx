'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// Cubic bezier tuple — must be [number,number,number,number] for TS strict mode
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const eyebrowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: easeOut },
  },
};

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease: easeOut, delay: 0.3 },
  },
};

const bodyVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: easeOut, delay: 0.7 },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut, delay: 1.0 },
  },
};

export default function HeroContent() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? 'visible' : 'hidden';

  return (
    <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 max-w-[920px] w-full mx-auto">
      {/* Eyebrow */}
      <motion.p
        variants={eyebrowVariants}
        initial={initial}
        animate="visible"
        className="text-[0.65rem] sm:text-xs tracking-[0.35em] text-white/50 uppercase mb-4 sm:mb-6 font-light"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        Welcome to Cosmic
      </motion.p>

      {/* Main headline: strictly 2 lines, no orphan 'A' */}
      <motion.h1
        variants={headlineVariants}
        initial={initial}
        animate="visible"
        className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] 2xl:text-[96px] uppercase leading-[0.95] tracking-[-0.025em] text-white mb-6 sm:mb-8 select-none"
        style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
      >
        <span className="block whitespace-nowrap">A METAVERSE</span>
        <span className="block whitespace-nowrap text-white/90 mt-1 sm:mt-2">
          MEDIEVAL GAME
        </span>
      </motion.h1>

      {/* Supporting copy */}
      <motion.p
        variants={bodyVariants}
        initial={initial}
        animate="visible"
        className="text-xs sm:text-sm md:text-base text-white/55 max-w-sm sm:max-w-md lg:max-w-lg leading-relaxed mb-8 sm:mb-10 font-light"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        Step into a boundless universe where medieval fantasy meets cosmic adventure.
        Build, explore, and own your destiny.
      </motion.p>

      {/* CTA */}
      <motion.div variants={ctaVariants} initial={initial} animate="visible">
        <a
          href="#world"
          className="group inline-flex items-center gap-3 border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] text-white/80 hover:text-white hover:border-white/40 text-[0.7rem] sm:text-xs tracking-[0.28em] uppercase px-7 py-3.5 sm:px-8 sm:py-4 transition-all duration-300"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          Explore the World
          <span className="block w-4 h-px bg-current transition-all duration-300 group-hover:w-6" />
        </a>
      </motion.div>
    </div>
  );
}

