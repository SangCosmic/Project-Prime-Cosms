'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MOTION } from '@/lib/motionConfig';

const principles = [
  {
    title: 'Explore',
    description: 'Traverse a vast cosmic realm where medieval kingdoms meet distant stars',
  },
  {
    title: 'Build',
    description: 'Forge alliances, develop territories, and shape the empire\'s destiny',
  },
  {
    title: 'Own',
    description: 'True digital ownership of characters, land, and artifacts you create',
  },
];

const contentVariants: Variants = {
  hidden: { opacity: 0, y: MOTION.reveal.large },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.normal,
      ease: MOTION.easing.out,
      staggerChildren: MOTION.stagger.text,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: MOTION.reveal.medium },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION.duration.normal, ease: MOTION.easing.out },
  },
};

export default function CosmicAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Minimal background depth
  const enableParallax = !shouldReduceMotion && !isMobile;
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? ['-0.5%', '0.5%'] : ['0%', '0%']
  );

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      aria-label="About COSMIC"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#04050f]"
    >
      {/* ── Background atmosphere ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(75,0,130,0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 70%, rgba(25,25,112,0.10) 0%, transparent 60%), #04050f',
          }}
        />
      </motion.div>

      {/* ── Top atmospheric blend ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 z-10 h-36 md:h-48 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #04050f 0%, rgba(4,5,15,0.7) 40%, transparent 100%)',
        }}
      />

      {/* ── Content container ── */}
      <div className="relative z-20 w-full px-6 py-32 md:py-40 lg:py-48 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: MOTION.viewport.once, amount: 0.2 }}
          variants={contentVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400/80 shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
            <p
              className="text-[10px] tracking-[0.4em] text-white/50 uppercase font-light"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              ABOUT COSMIC
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400/80 shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-8 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
          >
            A World Beyond
            <br />
            the Ordinary
          </motion.h2>

          {/* Body copy */}
          <motion.p
            variants={itemVariants}
            className="text-white/70 text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-16 md:mb-20 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            COSMIC is a living universe where medieval fantasy, cosmic exploration, strategy,
            and digital ownership converge. Built for those who seek more than a game—an empire
            to forge, a legacy to claim.
          </motion.p>

          {/* Principles grid */}
          <motion.div
            variants={contentVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                variants={itemVariants}
                className="relative group flex"
              >
                {/* Card container */}
                <div className="relative p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-white/[0.04] flex flex-col w-full">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
                    style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
                  >
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-white/60 text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    {principle.description}
                  </p>

                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139,92,246,0.1), transparent 40%)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom atmospheric blend ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 z-10 h-36 md:h-48 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #04050f 0%, rgba(4,5,15,0.7) 40%, transparent 100%)',
        }}
      />
    </motion.section>
  );
}
