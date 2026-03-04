'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import Image from 'next/image';
import rice from '../../public/images/agriculture/basmati_rice.jpg';
import millets from '../../public/images/agriculture/millets.jpg';
import pulses from '../../public/images/agriculture/pulses.jpg';
import cereals from '../../public/images/agriculture/cereals.jpg';
import fruits from '../../public/images/agriculture/fruits.jpg';
import spices from '../../public/images/agriculture/spices.jpg';
import oils from '../../public/images/agriculture/oils.jpg';
import honey from '../../public/images/agriculture/honey.jpg';

const agriProducts = [
  { name: 'Basmati Rice', category: 'Grains', image: rice },
  { name: 'Organic Millets', category: 'Superfoods', image: millets },
  { name: 'Natural Pulses', category: 'Proteins', image: pulses },
  { name: 'Ancient Cereals', category: 'Nutrition', image: cereals },
  { name: 'Seasonal Fruits', category: 'Fresh', image: fruits },
  { name: 'Exotic Spices', category: 'Aroma', image: spices },
  { name: 'Cold Pressed Oils', category: 'Wellness', image: oils },
  { name: 'Gourmet Honey', category: 'Sweeteners', image: honey },
];

const AgriPortfolio = () => {
  return (
    <section className="py-40 bg-white" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 text-[#2d5a27] font-bold uppercase tracking-[0.3em] text-sm mb-6"
          >
            <Leaf size={20} />
            <span>Farm Portfolio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight"
          >
            Curated <span className="text-[#2d5a27] font-script lowercase italic block md:inline text-8xl md:text-9xl">Harvest</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-xl font-light leading-relaxed"
          >
            A meticulously selected range of premium organic products, 
            sourced directly from our certified farms to ensure unmatched quality and purity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {agriProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-700 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-white text-2xl font-bold">{product.name}</h3>
                </div>
              </div>
              
              <div className="px-4 text-center md:text-left transition-transform duration-300 group-hover:-translate-y-2">
                <span className="text-[#2d5a27]/40 font-bold block mb-2 text-sm tracking-widest uppercase">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="text-2xl font-bold text-gray-900 group-hover:text-[#2d5a27] transition-colors">
                  {product.name}
                </h4>
                <div className="h-0.5 w-0 bg-[#2d5a27] mt-3 group-hover:w-16 transition-all duration-500 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 flex justify-center"
        >
          <button className="group relative px-12 py-5 bg-[#2d5a27] text-white rounded-full font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#2d5a27]/30 transition-all">
            <span className="relative z-10">Download Catalog</span>
            <div className="absolute inset-0 bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AgriPortfolio;
