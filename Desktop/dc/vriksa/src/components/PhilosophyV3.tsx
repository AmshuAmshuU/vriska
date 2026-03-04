'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const philosophyWords = [
  { word: "Freshness", color: "text-[#2d5a27]", size: "text-[12rem]" },
  { word: "Purity", color: "text-[#d4af37]", size: "text-[10rem]" },
  { word: "Sustainability", color: "text-[#2d5a27]", size: "text-[8rem]" },
  { word: "Innovation", color: "text-[#1a1a1a]", size: "text-[11rem]" },
  { word: "Life", color: "text-[#2d5a27]", size: "text-[14rem]" }
];

const PhilosophyV3 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#fdfdfb]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Background Label */}
        <div className="absolute top-20 left-20 z-0">
            <span className="text-[10px] font-bold tracking-[1em] uppercase text-gray-300">CORE ETHOS</span>
        </div>

        <motion.div style={{ x }} className="flex gap-24 items-baseline whitespace-nowrap px-[10vw]">
          {philosophyWords.map((item, index) => (
            <motion.div 
              key={item.word}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
               <span className="text-[10px] font-bold tracking-[0.5em] text-[#d4af37] mb-4 uppercase">0{index + 1}</span>
               <h2 className={`${item.color} ${item.size} font-bold leading-none tracking-tighter hover:italic transition-all duration-700 cursor-default select-none`}>
                 {item.word}
               </h2>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Blobs that react to scroll */}
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, 200]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
          }}
          className="absolute bottom-40 right-40 w-64 h-64 bg-[#2d5a27]/5 rounded-full blur-3xl -z-1"
        />
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -400]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -180])
          }}
          className="absolute top-40 left-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] -z-1"
        />
      </div>

      {/* Progress Bar */}
      <motion.div 
         style={{ scaleX: scrollYProgress }}
         className="fixed bottom-0 left-0 right-0 h-1 bg-[#2d5a27] origin-left z-[50]"
      />
    </section>
  );
};

export default PhilosophyV3;
