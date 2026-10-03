'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MOTION } from '@/lib/motionConfig';

const footerLinks = {
  explore: [
    { label: 'World', href: '#world' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'NFTs', href: '#nft' },
    { label: 'Roadmap', href: '#roadmap' },
  ],
  connect: [
    { label: 'Twitter', href: '#' },
    { label: 'Discord', href: '#' },
    { label: 'Telegram', href: '#' },
    { label: 'Medium', href: '#' },
  ],
};

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.normal,
      ease: MOTION.easing.out,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION.duration.normal, ease: MOTION.easing.out },
  },
};

export default function CosmicFooter() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#04050f] border-t border-white/5">
      {/* ── Content container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 md:px-10 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={footerVariants}
        >
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12 md:mb-16">
            {/* Brand column */}
            <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4">
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-[0.15em] uppercase"
                style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
              >
                COSMIC
              </h2>
              <p
                className="text-white/50 text-sm md:text-base leading-relaxed max-w-sm"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Where medieval fantasy and cosmic strategy converge into a living universe of
                digital ownership and endless exploration.
              </p>
            </motion.div>

            {/* Links columns */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6"
            >
              {/* Explore */}
              <div>
                <h3
                  className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-medium"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Explore
                </h3>
                <ul className="space-y-2.5">
                  {footerLinks.explore.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3
                  className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-medium"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Connect
                </h3>
                <ul className="space-y-2.5">
                  {footerLinks.connect.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back to top */}
              <div className="col-span-2 md:col-span-1">
                <button
                  onClick={scrollToTop}
                  className="group flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  aria-label="Scroll to top"
                >
                  <span className="text-xs uppercase tracking-[0.2em]">Back to Top</span>
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
            aria-hidden="true"
          />

          {/* Bottom section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            <p>© {new Date().getFullYear()} COSMIC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white/60 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white/60 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background subtle glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(75,0,130,0.08) 0%, transparent 50%)',
        }}
      />
    </footer>
  );
}
