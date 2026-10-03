import CosmicNavbar from '@/components/cosmic/CosmicNavbar';
import CosmicHero from '@/components/cosmic/CosmicHero';
import CosmicTrading from '@/components/cosmic/CosmicTrading';
import CosmicNFT from '@/components/cosmic/CosmicNFT';
import CosmicRoadmap from '@/components/cosmic/CosmicRoadmap';
import CosmicAbout from '@/components/cosmic/CosmicAbout';

export default function Home() {
  return (
    <>
      <CosmicNavbar />
      <main>
        <CosmicHero />
        <CosmicTrading />
        <CosmicNFT />
        <CosmicRoadmap />
        <CosmicAbout />
      </main>
    </>
  );
}

