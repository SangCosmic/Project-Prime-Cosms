'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MOTION } from '@/lib/motionConfig';

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    period: 'Q1 2027',
    items: [
      'Launch COSMIC token',
      'Deploy core smart contracts',
      'Establish community channels',
      'Release whitepaper v2.0',
    ],
    status: 'upcoming' as const,
  },
  {
    phase: 'Phase 2',
    title: 'Ecosystem Expansion',
    period: 'Q2 2027',
    items: [
      'NFT marketplace launch',
      'Character minting begins',
      'Trading platform beta',
      'First strategic partnerships',
    ],
    status: 'upcoming' as const,
  },
  {
    phase: 'Phase 3',
    title: 'Game Development',
    period: 'Q3-Q4 2027',
    items: [
      'Alpha gameplay preview',
      'Character evolution system',
      'PvE combat mechanics',
      'Land ownership framework',
    ],
    status: 'upcoming' as const,
  },
  {
    phase: 'Phase 4',
    title: 'Full Launch',
    period: 'Q1 2028',
    items: [
      'Public game release',
      'Guild system activation',
      'Cross-chain integration',
      'Governance DAO launch',
    ],
    status: 'future' as const,
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

const phaseVariants: Variants = {
  hidden: { opacity: 0, y: MOTION.reveal.medium },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION.duration.normal, ease: MOTION.easing.out },
  },
};

export default function CosmicRoadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle background parallax
  const enableParallax = !shouldReduceMotion && !isMobile;
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? ['-1%', '1%'] : ['0%', '0%']
  );

  return (
    <motion.section
      id="roadmap"
      ref={sectionRef}
      aria-label="COSMIC Roadmap"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#04050f]"
    >
      {/* ── Background gradient atmosphere ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 40%, rgba(75,0,130,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(25,25,112,0.12) 0%, transparent 50%), #04050f',
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
      <div className="relative z-20 w-full px-6 py-24 md:py-32 lg:py-40 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: MOTION.viewport.once, amount: MOTION.viewport.amount }}
          variants={contentVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={phaseVariants} className="mb-16 md:mb-20 text-center">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
            >
              Roadmap
            </h2>
            <p
              className="text-white/60 text-sm md:text-base max-w-2xl mx-auto tracking-wide"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Our journey from genesis to full-scale cosmic empire
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent"
            />

            {/* Phases */}
            <div className="space-y-12 md:space-y-16">
              {roadmapPhases.map((phase, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={phase.phase}
                    variants={phaseVariants}
                    className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12`}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg shadow-orange-500/50"
                      aria-hidden="true"
                    />

                    {/* Spacer for mobile */}
                    <div className="md:hidden w-8" />

                    {/* Content card */}
                    <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className="inline-block">
                        <div
                          className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-3"
                        >
                          <span
                            className="text-xs uppercase tracking-wider text-indigo-300"
                            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                          >
                            {phase.phase}
                          </span>
                        </div>
                      </div>

                      <h3
                        className="text-2xl md:text-3xl font-bold text-white mb-2"
                        style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
                      >
                        {phase.title}
                      </h3>

                      <p
                        className="text-orange-400/80 text-sm md:text-base mb-4 tracking-wide"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        {phase.period}
                      </p>

                      <ul
                        className={`space-y-2 text-white/70 text-sm md:text-base ${isEven ? 'md:ml-auto md:max-w-md' : 'md:max-w-md'}`}
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Spacer for desktop alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
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
