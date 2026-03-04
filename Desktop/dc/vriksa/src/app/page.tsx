import Navbar from '@/components/Navbar';
import HeroV3 from '@/components/HeroV3';
import PhilosophyV3 from '@/components/PhilosophyV3';
import Services from '@/components/Services';
import SeedToTable from '@/components/SeedToTable';
import AgriPortfolioV3 from '@/components/AgriPortfolioV3';
import AboutAgri from '@/components/AboutAgri';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfdfb] select-none">
      <Navbar />
      <HeroV3 />
      <PhilosophyV3 />
      <Services />
      <SeedToTable />
      <AgriPortfolioV3 />
      <AboutAgri />
      <Footer />
    </main>
  );
}
