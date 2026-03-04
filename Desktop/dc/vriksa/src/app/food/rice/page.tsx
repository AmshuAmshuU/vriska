'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RiceHero from '@/components/RiceHero';
import RiceHistory from '@/components/RiceHistory';
import RiceShowcase from '@/components/RiceShowcase';
import RiceBenefits from '@/components/RiceBenefits';
import { motion } from 'framer-motion';

export default function RicePage() {
  return (
    <main className="min-h-screen bg-[#fdfdfb]">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <RiceHero />
        <RiceHistory />
        <RiceBenefits />
        <RiceShowcase />
      </motion.div>

      <Footer />
    </main>
  );
}
