'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { COSMIC_ASSETS } from '@/lib/assetManifest';
import { MOTION } from '@/lib/motionConfig';

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

export default function CosmicTrading() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [shouldUseVideo, setShouldUseVideo] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Video policy: >= 1024px only, respect Save-Data
    const isLargeViewport = window.innerWidth >= 1024;
    const hasSaveData = 'connection' in navigator &&
      (navigator as any).connection?.saveData === true;

    setShouldUseVideo(isLargeViewport && !hasSaveData);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    if (!videoRef.current || !shouldUseVideo || shouldReduceMotion) return;

    const video = videoRef.current;

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (video.readyState >= 2 && !isNaN(video.duration)) {
        const targetTime = progress * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.01) {
          video.currentTime = targetTime;
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, shouldUseVideo, shouldReduceMotion]);

  // Subtle background parallax only on large viewports
  const enableParallax = !shouldReduceMotion && shouldUseVideo && mounted;
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? ['-0.5%', '0.5%'] : ['0%', '0%']
  );

  // Trading entrance transition: opacity fade only
  const enableTransitions = !shouldReduceMotion && shouldUseVideo && mounted;
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    enableTransitions ? [0.3, 1] : [1, 1]
  );

  // Trading exit transition: opacity fade only
  const exitOpacity = useTransform(
    scrollYProgress,
    [0.85, 1],
    enableTransitions ? [1, 0.8] : [1, 1]
  );

  return (
    <motion.section
      id="ecosystem"
      ref={sectionRef}
      aria-label="Extraordinary Trading Strategies"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#04050f]"
      style={{ opacity: exitOpacity }}
    >
      {/* ── Background artwork with subtle parallax ── */}
      <motion.div
        className="absolute inset-0 z-0 h-[110%] top-[-5%] w-full"
        style={{
          y: bgY,
          opacity: sectionOpacity,
        }}
      >
        {/* Static fallback image - always present */}
        <Image
          src={COSMIC_ASSETS.environment.tradingBg}
          alt="Cosmic trading energy artifact — glowing red and orange celestial reactor"
          fill
          priority={false}
          className="object-cover object-right md:object-[65%_center] lg:object-right"
          sizes="100vw"
        />

        {/* Video layer - >= 1024px only, respects reduced motion and Save-Data */}
        {!shouldReduceMotion && shouldUseVideo && mounted && (
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-[65%_center] lg:object-right pointer-events-none"
            style={{ opacity: 0.85 }}
          >
            <source src="/cosmic/video/COSMIC_trading_motion_loop.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* ── Atmospheric transition overlays ── */}

      {/* Top transition — seamless blend from Hero into Trading */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 z-10 h-36 md:h-48 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #04050f 0%, rgba(4,5,15,0.7) 40%, transparent 100%)',
        }}
      />

      {/* Bottom transition grounding */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 z-10 h-36 md:h-48 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #04050f 0%, rgba(4,5,15,0.7) 40%, transparent 100%)',
        }}
      />

      {/* Left negative-space shadow — preserves text readability while leaving right visual focal point radiant */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-10 w-full md:w-3/5 lg:w-1/2 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(4,5,15,0.92) 0%, rgba(4,5,15,0.75) 45%, rgba(4,5,15,0.2) 80%, transparent 100%)',
        }}
      />

      {/* Subtle crimson / warm-orange ambient glow reflection on text side */}
      <div
        aria-hidden="true"
        className="absolute left-10 top-1/2 -translate-y-1/2 z-10 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(235,80,30,0.4) 0%, rgba(130,20,50,0.15) 60%, transparent 80%)',
        }}
      />

      {/* ── Content container: Asymmetric, left-aligned ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 md:py-36 w-full">
        <motion.div
          variants={contentVariants}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: MOTION.viewport.once, amount: MOTION.viewport.amount }}
          className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-left flex flex-col items-start"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2.5 mb-3 sm:mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/90 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
            <p
              className="text-[9px] sm:text-[10px] tracking-[0.35em] text-white/50 uppercase font-light select-none"
              style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
            >
              COSMIC ECOSYSTEM
            </p>
          </motion.div>

          {/* Headline: High-contrast editorial serif, 2 deliberate lines */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] xl:text-[62px] 2xl:text-[70px] font-normal uppercase leading-[0.94] tracking-[0.02em] text-white mb-4 sm:mb-5 select-none"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Cinzel', 'Didot', 'Bodoni MT', 'Times New Roman', Georgia, serif",
            }}
          >
            <span className="block whitespace-nowrap">EXTRAORDINARY</span>
            <span className="block whitespace-nowrap text-white/90 mt-1 sm:mt-1.5">
              TRADING STRATEGIES
            </span>
          </motion.h2>

          {/* Supporting copy */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-[13px] md:text-sm text-white/60 max-w-md sm:max-w-lg leading-relaxed mb-6 sm:mb-7 font-light"
            style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
          >
            A world where strategy, timing, and opportunity shape your journey
            through the COSMIC universe.
          </motion.p>

          {/* CTA: Understated and editorial */}
          <motion.div variants={itemVariants}>
            <a
              href="#ecosystem"
              className="group inline-flex items-center gap-2.5 border border-white/20 bg-white/2 hover:bg-white/6 hover:border-orange-500/50 text-white/75 hover:text-white text-[9px] sm:text-[10px] tracking-[0.28em] uppercase px-5 py-2.5 sm:px-6 sm:py-3 transition-all duration-300"
              style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
            >
              Discover the Economy
              <span className="block w-3 h-px bg-current transition-all duration-300 group-hover:w-5 group-hover:bg-orange-400" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
