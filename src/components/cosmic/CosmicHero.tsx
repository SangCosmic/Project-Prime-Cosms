'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { COSMIC_ASSETS } from '@/lib/assetManifest';
import HeroContent from './HeroContent';

export default function CosmicHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#04050f]"
    >
      {/* ── Background artwork ── */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
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
    </section>
  );
}
