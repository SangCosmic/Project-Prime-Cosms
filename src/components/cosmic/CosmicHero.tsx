'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useTime, useTransform, useScroll } from 'framer-motion';
import { COSMIC_ASSETS } from '@/lib/assetManifest';
import { MOTION } from '@/lib/motionConfig';
import HeroContent from './HeroContent';

export default function CosmicHero() {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const time = useTime();
  const sectionRef = useRef<HTMLElement>(null);

  // Section-local scroll for exit transition
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Initial zoom animation (1.06 → 1.0 over 8s)
  const initialScale = shouldReduceMotion ? 1 : 1.06;

  // Continuous subtle drift after initial zoom (0 → 1% over 60s cycle)
  const drift = useTransform(
    time,
    [0, 60000],
    shouldReduceMotion ? MOTION.parallax.hero.y : ['0%', '1%']
  );

  // Hero exit transition: fade out and pull back as user scrolls down
  const enableTransitions = !shouldReduceMotion && !isMobile;
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    enableTransitions ? MOTION.transitions.heroExit.opacity : [1, 1]
  );
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    enableTransitions ? MOTION.transitions.heroExit.scale : [1, 1]
  );
  const heroY = useTransform(
    scrollYProgress,
    [0, 0.5],
    enableTransitions ? MOTION.transitions.heroExit.y : ['0%', '0%']
  );

  return (
    <motion.section
      ref={sectionRef}
      aria-label="Hero"
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#04050f]"
      style={{ opacity: heroOpacity }}
    >
      {/* ── Background artwork ── */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: initialScale }}
        animate={{ scale: 1 }}
        transition={{ duration: MOTION.duration.cinematic, ease: MOTION.easing.out }}
        style={{ y: drift, scale: heroScale, translateY: heroY }}
      >
        <Image
          src={COSMIC_ASSETS.environment.heroBg}
          alt="Cosmic medieval landscape — dragon, castle, moon and starlit valley"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Vignette — radial shadow around edges ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(4,5,15,0.72) 100%)',
        }}
      />

      {/* ── Top gradient — softens navbar area ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 z-10 h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(4,5,15,0.65) 0%, transparent 100%)',
        }}
      />

      {/* ── Bottom gradient — text readability ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 z-10 h-56 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(4,5,15,0.80) 0%, transparent 100%)',
        }}
      />

      {/* ── Side atmospheric darkening (desktop only) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-10 w-1/4 pointer-events-none hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(4,5,15,0.30) 0%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 z-10 w-1/4 pointer-events-none hidden md:block"
        style={{
          background:
            'linear-gradient(to left, rgba(4,5,15,0.30) 0%, transparent 100%)',
        }}
      />

      {/* ── Centered hero content ── */}
      <div className="relative z-20 flex flex-1 min-h-screen flex-col items-center justify-center pt-24 pb-16">
        <HeroContent />
      </div>
    </motion.section>
  );
}
