'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "1rem" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#fdfdfb] z-10" />
        <motion.div
           animate={{
             scale: [1, 1.1, 1],
             x: ["-1%", "1%", "-1%"],
             y: ["-1%", "1%", "-1%"]
           }}
           transition={{
             duration: 30,
             repeat: Infinity,
             ease: "linear"
           }}
           className="w-full h-full bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" 
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 relative z-20 text-center -mt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-10 py-2 mb-10 text-xs font-bold tracking-[0.3em] text-white uppercase bg-white/10 rounded-full backdrop-blur-md border border-white/20">
            Established 2021
          </span>
          
          <div className="mb-8">
            <AnimatedText 
              text="Bridging Nature and" 
              className="text-4xl md:text-6xl font-light text-white tracking-tight" 
            />
            <AnimatedText 
              text="Global Innovation" 
              className="text-6xl md:text-9xl font-bold gradient-text brightness-150 py-2" 
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light"
          >
            A multi-disciplinary collective specializing in sustainable agriculture, 
            premium textiles, and visionary engineering.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2d5a27] text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-[#3d7a35] transition-all shadow-[0_20px_40px_rgba(45,90,39,0.3)]"
            >
              Our Portfolio
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-full text-lg font-bold transition-all"
            >
              The Vision
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-[#2d5a27]/20 to-transparent rounded-full blur-2xl z-10"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl z-10"
      />
    </section>
  );
};

export default Hero;
