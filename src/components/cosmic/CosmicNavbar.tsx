'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MOTION } from '@/lib/motionConfig';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'World', href: '#world' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'About', href: '#about' },
];

export default function CosmicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const heroThreshold = typeof window !== 'undefined' ? window.innerHeight * 0.5 : 400;

    // Show backdrop after scrolling past hero
    setScrolled(latest > heroThreshold);

    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > heroThreshold) {
      // Scrolling down past hero - hide navbar
      setHidden(true);
    } else if (latest < previous) {
      // Scrolling up - show navbar
      setHidden(false);
    }

    // Always show at very top
    if (latest < 50) {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
      animate={{
        y: hidden && !shouldReduceMotion ? -100 : 0,
        opacity: hidden && !shouldReduceMotion ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-10 lg:px-16 transition-colors duration-300 ${
        scrolled ? 'bg-[#04050f]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto relative">
        {/* Brand */}
        <Link
          href="/"
          className="text-white/90 text-sm font-semibold tracking-[0.25em] uppercase select-none hover:text-white transition-colors duration-300"
          style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
        >
          COSMIC
        </Link>

        {/* Desktop nav links — centered */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-white/60 hover:text-white/90 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right spacer */}
        <div className="hidden md:block w-24" />

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-white/70 transition-transform duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-white/70 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-white/70 transition-transform duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 rounded-xl bg-[#06071a]/90 backdrop-blur-md border border-white/5 px-6 py-6"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/70 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

