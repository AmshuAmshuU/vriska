'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import MagneticButton from './MagneticButton';

const HeroV3 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.4], ["blur(0px)", "blur(20px)"]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#fdfdfb] overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Layer 1: Fixed Background */}
        <motion.div 
          style={{ scale, filter: blur }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </motion.div>

        {/* Layer 2: Mask Reveal Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-20 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-10 py-2 mb-8 text-[10px] font-bold tracking-[0.5em] text-white uppercase bg-white/10 rounded-full backdrop-blur-md border border-white/20">
              The Vriksa Collective
            </span>
            
            <h1 className="text-7xl md:text-[10rem] font-bold text-white leading-none tracking-tighter mb-12">
              <motion.span 
                initial={{ filter: 'blur(20px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="block"
              >
                NATURE
              </motion.span>
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="block gradient-text italic font-script -mt-4 md:-mt-10"
              >
                Redefined
              </motion.span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-20">
              <MagneticButton>
                <button className="px-16 py-6 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#2d5a27] hover:text-white transition-colors duration-500 shadow-2xl">
                  Explore The Vault
                </button>
              </MagneticButton>
              
              <MagneticButton>
                <button className="px-16 py-6 bg-transparent border border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-500">
                  Our Philosophy
                </button>
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
            className="absolute bottom-20 left-20 w-32 h-32 border-l border-b border-white/20 z-10 hidden lg:block"
        />
        <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
            className="absolute top-40 right-40 w-1 h-40 bg-gradient-to-b from-[#d4af37] to-transparent z-10 hidden lg:block"
        />
      </div>
      
      {/* Scroll indicator for V3 */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        className="absolute bottom-10 left-10 flex flex-col items-center gap-4 z-30"
      >
        <span className="text-white text-[10px] uppercase font-bold tracking-widest [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-20 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroV3;
