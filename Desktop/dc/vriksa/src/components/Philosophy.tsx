'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const words = [
    { text: "Healthy", color: "text-[#4A4E29]" }, // Earthy Brown/Green
    { text: "life", color: "text-[#FF5F5F]" },    // Coral Red
    { text: "with", color: "text-[#FFB84C]" },   // Saffron Orange
    { text: "fresh", color: "text-[#FFD93D]" },  // Sun Yellow
    { text: "products", color: "text-[#4E944F]" } // Vibrant Green
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 bg-[#FFD93D] rounded-full blur-3xl" />
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4E944F] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4"
        >
          {words.slice(0, 3).map((word, i) => (
            <motion.span
              key={word.text}
              initial={{ y: 50, opacity: 0, rotate: -5 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: i * 0.1, type: "spring", damping: 12 }}
              className={`text-6xl md:text-9xl font-script font-bold ${word.color} inline-block`}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4 mt-4"
        >
          {words.slice(3).map((word, i) => (
            <motion.span
              key={word.text}
              initial={{ y: 50, opacity: 0, rotate: 5 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: (i + 3) * 0.1, type: "spring", damping: 12 }}
              className={`text-6xl md:text-9xl font-script font-bold ${word.color} inline-block`}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="h-1 w-32 bg-gray-200 mx-auto mt-20"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-gray-500 max-w-xl mx-auto text-lg font-light tracking-wide uppercase italic"
        >
          Our guiding principle for every seed we sow and every harvest we bring to your table.
        </motion.p>
      </div>
    </section>
  );
};

export default Philosophy;
