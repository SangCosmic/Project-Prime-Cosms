import CosmicNavbar from '@/components/cosmic/CosmicNavbar';
import CosmicHero from '@/components/cosmic/CosmicHero';
import CosmicTrading from '@/components/cosmic/CosmicTrading';

export default function Home() {
  return (
    <>
      <CosmicNavbar />
      <main>
        <CosmicHero />
        <CosmicTrading />
      </main>
    </>
  );
}

