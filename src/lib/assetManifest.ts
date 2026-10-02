/**
 * COSMIC Asset Manifest
 * Single source of truth for all production asset paths.
 * Source originals live in /COSMIC_ASSET — do NOT reference those directly.
 * All paths below reference the production copies under /public.
 */

export const COSMIC_ASSETS = {
  environment: {
    heroBg: '/cosmic/environment/cosmic-hero-bg.png',
    tradingBg: '/cosmic/environment/cosmic-trading-bg.png',
    nftBg: '/cosmic/environment/cosmic-nft-bg.png',
  },
  characters: {
    character01: '/cosmic/characters/cosmic-character-01.png',
    character02: '/cosmic/characters/cosmic-character-02.png',
    character03: '/cosmic/characters/cosmic-character-03.png',
  },
} as const;

