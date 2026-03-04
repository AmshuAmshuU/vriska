'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RiceHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0f1710]">
      <motion.div 
        style={{ scale, y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6"
      >
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "1em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.5 }}
          className="text-[#d4af37] text-xs font-bold uppercase mb-8 block"
        >
          Sacred Harvest
        </motion.span>
        <h1 className="text-5xl md:text-[8rem] font-bold text-white leading-none tracking-tighter mb-8">
          The <span className="font-script italic text-[#d4af37]">Legacy</span> <br /> of Grain
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed">
          From ancient traditions to modern plates, exploring the diverse heritage 
          of the world&apos;s most essential staple.
        </p>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <span className="text-white text-[10px] uppercase font-bold tracking-[0.3em]">Explore Heritage</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#d4af37] to-transparent"
        />
      </div>
    </section>
  );
};

export default RiceHero;
