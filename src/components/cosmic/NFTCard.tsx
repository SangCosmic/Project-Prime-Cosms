'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { MOTION } from '@/lib/motionConfig';

interface NFTCardProps {
  name: string;
  characterClass: string;
  rarity: string;
  imageSrc: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: MOTION.reveal.large, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: MOTION.duration.normal,
      ease: MOTION.easing.out,
      delay: i * MOTION.stagger.cards,
    },
  }),
};

export default function NFTCard({
  name,
  characterClass,
  rarity,
  imageSrc,
  index,
}: NFTCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Disable 3D tilt on mobile for performance
  const hoverAnimation = shouldReduceMotion
    ? {}
    : isMobile
    ? {
        y: MOTION.hover.card.y,
        scale: MOTION.hover.card.scale,
        transition: { duration: MOTION.hover.card.duration, ease: MOTION.easing.out },
      }
    : {
        y: MOTION.hover.card.y,
        scale: MOTION.hover.card.scale,
        rotateY: MOTION.hover.card.rotateY,
        rotateX: MOTION.hover.card.rotateX,
        transition: { duration: MOTION.hover.card.duration, ease: MOTION.easing.out },
      };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial={shouldReduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: MOTION.viewport.once, amount: MOTION.viewport.amount }}
      whileHover={hoverAnimation}
      className="group relative w-full"
      style={{ perspective: '1000px' }}
    >
      {/* Card container */}
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-indigo-950/40 via-slate-950/60 to-violet-950/40 border border-indigo-500/20 backdrop-blur-sm">
        {/* Subtle glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Character artwork */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={`${name} — ${characterClass} character`}
              fill
              className="object-contain drop-shadow-[0_0_24px_rgba(139,92,246,0.3)]"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 28vw"
            />
          </div>
        </div>

        {/* Bottom info panel */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent">
          {/* Rarity badge */}
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1 h-1 rounded-full bg-violet-400/80 shadow-[0_0_6px_rgba(167,139,250,0.6)]" />
            <span
              className="text-[9px] tracking-[0.3em] uppercase text-violet-300/70 font-light"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              {rarity}
            </span>
          </div>

          {/* Name */}
          <h3
            className="text-base sm:text-lg font-medium text-white/95 mb-1 tracking-wide"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            {name}
          </h3>

          {/* Class */}
          <p
            className="text-[11px] text-white/50 tracking-[0.08em] uppercase font-light"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            {characterClass}
          </p>
        </div>

        {/* Top-right accent corner */}
        <div
          className="absolute top-0 right-0 w-24 h-24 opacity-30 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(168,85,247,0.4) 0%, transparent 60%)',
          }}
        />
      </div>
    </motion.div>
  );
}
