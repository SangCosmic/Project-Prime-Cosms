/**
 * COSMIC Motion System
 * Centralized configuration for all animations and transitions.
 * Ensures consistent cinematic timing across the experience.
 */

export const MOTION = {
  /**
   * Easing curves
   * out: smooth deceleration for entrances
   * inOut: balanced curve for transitions
   */
  easing: {
    out: [0.22, 1, 0.36, 1] as [number, number, number, number],
    inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  },

  /**
   * Animation durations (seconds)
   */
  duration: {
    fast: 0.3,
    normal: 0.8,
    slow: 1.3,
    cinematic: 8.0,
  },

  /**
   * Stagger delays for sequential reveals
   */
  stagger: {
    cards: 0.12,
    text: 0.15,
  },

  /**
   * Parallax ranges by section
   * Hero: slowest drift for stability
   * Trading: baseline parallax
   * NFT: slightly faster for depth variety
   */
  parallax: {
    hero: {
      y: ['0%', '1%'] as [string, string],
      scale: [1.0, 1.0] as [number, number],
    },
    trading: {
      y: ['-4%', '4%'] as [string, string],
      scale: [1.02, 1.0, 1.03] as [number, number, number],
    },
    nft: {
      y: ['-4.8%', '4.8%'] as [string, string],
      scale: [1.02, 1.0, 1.03] as [number, number, number],
    },
  },

  /**
   * Text reveal distances (pixels)
   */
  reveal: {
    small: 12,
    medium: 20,
    large: 24,
  },

  /**
   * Hover transformations
   */
  hover: {
    card: {
      y: -8,
      scale: 1.02,
      rotateY: 1.5,
      rotateX: -1,
      duration: 0.3,
    },
    cta: {
      duration: 0.3,
    },
  },

  /**
   * Viewport intersection thresholds
   */
  viewport: {
    once: true,
    amount: 0.3,
  },

  /**
   * Scene transition configuration
   * Controls depth separation and crossfade between sections
   */
  transitions: {
    // Hero exit as Trading enters
    heroExit: {
      opacity: [1, 0.4] as [number, number],
      scale: [1, 0.98] as [number, number],
      y: ['0%', '-5%'] as [string, string],
    },
    // Trading entrance
    tradingEnter: {
      opacity: [0, 1] as [number, number],
      scale: [1.02, 1] as [number, number],
      y: ['3%', '0%'] as [string, string],
    },
    // Trading exit as NFT enters
    tradingExit: {
      opacity: [1, 0.4] as [number, number],
      scale: [1, 0.98] as [number, number],
      y: ['0%', '-5%'] as [string, string],
    },
    // NFT entrance
    nftEnter: {
      opacity: [0, 1] as [number, number],
      scale: [1.02, 1] as [number, number],
      y: ['3%', '0%'] as [string, string],
    },
  },
} as const;

/**
 * Check if device is mobile based on viewport width
 */
export const useIsMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};
