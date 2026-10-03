'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { COSMIC_ASSETS } from '@/lib/assetManifest';
import { MOTION } from '@/lib/motionConfig';
import NFTCard from './NFTCard';

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

const nftCards = [
  {
    name: 'Void Knight',
    characterClass: 'Warrior',
    rarity: 'Legendary',
    imageSrc: COSMIC_ASSETS.characters.character01,
  },
  {
    name: 'Arcane Ranger',
    characterClass: 'Hunter',
    rarity: 'Epic',
    imageSrc: COSMIC_ASSETS.characters.character02,
  },
  {
    name: 'Astral Oracle',
    characterClass: 'Mystic',
    rarity: 'Mythic',
    imageSrc: COSMIC_ASSETS.characters.character03,
  },
];

export default function CosmicNFT() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax depth 1.2x (slightly faster for depth variety)
  const enableParallax = !shouldReduceMotion && !isMobile;
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? MOTION.parallax.nft.y : ['0%', '0%']
  );
  const bgScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    enableParallax ? MOTION.parallax.nft.scale : [1, 1, 1]
  );

  // NFT entrance transition: fade in and scale as section enters
  const enableTransitions = !shouldReduceMotion && !isMobile;
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    enableTransitions ? MOTION.transitions.nftEnter.opacity : [1, 1]
  );
  const sectionScale = useTransform(
    scrollYProgress,
    [0, 0.3],
    enableTransitions ? MOTION.transitions.nftEnter.scale : [1, 1]
  );
  const sectionY = useTransform(
    scrollYProgress,
    [0, 0.3],
    enableTransitions ? MOTION.transitions.nftEnter.y : ['0%', '0%']
  );

  return (
    <motion.section
      id="nft"
      ref={sectionRef}
      aria-label="Evolutionary NFTs and Play to Earn Gaming"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#04050f]"
    >
      {/* ── Background artwork with subtle parallax ── */}
      <motion.div
        className="absolute inset-0 z-0 h-[110%] -top-[5%] w-full"
        style={{
          y: bgY,
          scale: bgScale,
          opacity: sectionOpacity,
          translateY: sectionY,
        }}
      >
        <Image
          src={COSMIC_ASSETS.environment.nftBg}
          alt="Cosmic NFT realm — deep blue mystical environment with magenta energy"
          fill
          priority={false}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Atmospheric transition overlays ── */}

      {/* Top transition */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 z-10 h-36 md:h-48 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #04050f 0%, rgba(4,5,15,0.7) 40%, transparent 100%)',
        }}
      />

      {/* Bottom transition */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 z-10 h-36 md:h-48 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #04050f 0%, rgba(4,5,15,0.7) 40%, transparent 100%)',
        }}
      />

      {/* Left text area darkening */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-10 w-full md:w-2/5 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(4,5,15,0.90) 0%, rgba(4,5,15,0.70) 50%, transparent 100%)',
        }}
      />

      {/* Violet/magenta ambient glow */}
      <div
        aria-hidden="true"
        className="absolute right-1/4 top-1/3 z-10 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(192,38,211,0.2) 50%, transparent 80%)',
        }}
      />

      {/* ── Content container ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column: Text content */}
          <motion.div
            variants={contentVariants}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: MOTION.viewport.once, amount: MOTION.viewport.amount }}
            className="lg:col-span-5 xl:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 mb-3 sm:mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400/90 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
              <p
                className="text-[9px] sm:text-[10px] tracking-[0.35em] text-white/50 uppercase font-light select-none"
                style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
              >
                COSMIC COLLECTION
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[52px] font-normal uppercase leading-[0.92] tracking-[0.02em] text-white mb-4 sm:mb-5 select-none"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Cinzel', 'Didot', 'Bodoni MT', 'Times New Roman', Georgia, serif",
              }}
            >
              <span className="block">EVOLUTIONARY</span>
              <span className="block text-white/90 mt-0.5 sm:mt-1">NFTs &amp; LUCRATIVE</span>
              <span className="block text-white/90 mt-0.5 sm:mt-1">PLAY 2 EARN</span>
              <span className="block text-white/90 mt-0.5 sm:mt-1">GAMING</span>
            </motion.h2>

            {/* Supporting copy */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-[13px] md:text-sm text-white/60 max-w-md leading-relaxed mb-6 sm:mb-7 font-light"
              style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
            >
              Forge your legend with collectible characters that evolve through your gameplay.
              Own, trade, and earn in a living metaverse economy.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="#nft"
                className="group inline-flex items-center gap-2.5 border border-white/20 bg-white/[0.02] hover:bg-white/[0.06] hover:border-violet-400/50 text-white/75 hover:text-white text-[9px] sm:text-[10px] tracking-[0.28em] uppercase px-5 py-2.5 sm:px-6 sm:py-3 transition-all duration-300"
                style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
              >
                Explore Collection
                <span className="block w-3 h-px bg-current transition-all duration-300 group-hover:w-5 group-hover:bg-violet-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right column: NFT cards */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {nftCards.map((card, index) => (
                <NFTCard
                  key={card.name}
                  name={card.name}
                  characterClass={card.characterClass}
                  rarity={card.rarity}
                  imageSrc={card.imageSrc}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
