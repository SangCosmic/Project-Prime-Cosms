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
   * Subtle background motion only, max 1% to avoid shake
   */
  parallax: {
    hero: {
      y: ['0%', '0.5%'] as [string, string],
      scale: [1.0, 1.0] as [number, number],
    },
    trading: {
      y: ['-1%', '1%'] as [string, string],
      scale: [1.0, 1.0, 1.0] as [number, number, number],
    },
    nft: {
      y: ['-1.2%', '1.2%'] as [string, string],
      scale: [1.0, 1.0, 1.0] as [number, number, number],
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
   * Opacity-only crossfades for stability
   */
  transitions: {
    // Hero exit as Trading enters
    heroExit: {
      opacity: [1, 0.7] as [number, number],
    },
    // Trading entrance
    tradingEnter: {
      opacity: [0.2, 1] as [number, number],
    },
    // Trading exit as NFT enters
    tradingExit: {
      opacity: [1, 0.7] as [number, number],
    },
    // NFT entrance
    nftEnter: {
      opacity: [0.2, 1] as [number, number],
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
