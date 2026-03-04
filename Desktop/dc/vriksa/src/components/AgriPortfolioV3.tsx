'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Rice from '../../public/images/agriculture/basmati_rice.jpg';
import millets from '../../public/images/agriculture/millets.jpg';
import pulses from '../../public/images/agriculture/pulses.jpg';
import cereals from '../../public/images/agriculture/cereals.jpg';
import fruits from '../../public/images/agriculture/fruits.jpg';
import spices from '../../public/images/agriculture/spices.jpg';
import oils from '../../public/images/agriculture/oils.jpg';
import honey from '../../public/images/agriculture/honey.jpg';
import Image from 'next/image';

const products = [
  { name: 'Rice', image: Rice },
  { name: 'Organic Millets', image: millets },
  { name: 'Natural Pulses', image: pulses },
  { name: 'Ancient Cereals', image: cereals },
  { name: 'Seasonal Fruits', image: fruits },
  { name: 'Exotic Spices', image: spices },
  { name: 'Cold Pressed Oils', image: oils },
  { name: 'Gourmet Honey', image: honey },
];

const AgriPortfolioV3 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
        setConstraints({
            left: -containerRef.current.scrollWidth + window.innerWidth,
            right: 0,
        });
    }
  }, []);

  return (
    <section className="py-40 bg-[#0f1710] overflow-hidden">
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl"
            >
                <span className="text-[#d4af37] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Interactive Gallery</span>
                <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">The <span className="font-script italic text-[#d4af37]">Vault</span></h2>
                <p className="text-gray-400 text-xl font-light leading-relaxed">
                    Explore our curated collection of organic excellence. Drag to navigate 
                    through our heritage and commitment to purity.
                </p>
            </motion.div>
            <div className="mt-8 md:mt-0 flex gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 italic">Drag</div>
                <div className="w-24 h-px bg-white/20 self-center" />
            </div>
        </div>
      </div>

      <motion.div 
        ref={containerRef}
        drag="x"
        dragConstraints={constraints}
        className="flex gap-8 px-[10vw] cursor-grab active:cursor-grabbing pb-20"
      >
        {products.map((product, index) => (
          <motion.div 
            key={product.name}
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className="shrink-0 w-[320px] relative group"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-900 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] relative">
                <Image 
                   src={product.image} 
                   alt={product.name}
                   fill
                   className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[#d4af37] text-[10px] uppercase font-bold tracking-widest mb-3">Certified Organic</span>
                    <h3 className="text-white text-3xl font-bold mb-4">{product.name}</h3>
                    <a 
                       href={product.name === 'Rice' ? '/food/rice' : '#'}
                       className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 border-b border-white/30 pb-2 w-fit transition-colors hover:text-[#d4af37]"
                    >
                        Learn More <span className="text-[#d4af37]">→</span>
                    </a>
                </div>
            </div>
            
            <div className="mt-6 px-4 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="text-white/20 text-4xl font-bold font-mono">0{index + 1}</span>
                <span className="text-[#d4af37] font-script text-2xl italic">{product.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AgriPortfolioV3;
