'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import rice_heritage from "../../public/images/rice/Rice-heritage.jpg"

const RiceHistory = () => {
  return (
    <section className="py-20 bg-[#fdfdfb]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <Image 
                src={rice_heritage}
                alt="Antique Rice Farming" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#2d5a27] p-12 rounded-[3rem] text-white shadow-2xl hidden md:block">
              <span className="text-6xl font-bold block mb-2">5K</span>
              <span className="text-sm font-medium uppercase tracking-widest text-green-100">Years of History</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#2d5a27] font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Rooted in Tradition</span>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-10 leading-tight">A Journey Through <span className="text-[#2d5a27] font-script lowercase text-7xl">Time</span></h2>
            
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-light">
              <p>
                Rice cultivation isn&apos;t just agriculture; it&apos;s a testament to human civilization. 
                For over five millennia, these grains have sustained empires and shaped 
                the cultural landscape of entire continents.
              </p>
              <p>
                At Vriksa, we honor this legacy by preserving rare and ancient varieties 
                like black rice and bamboo rice, ensuring that these nutrient-dense 
                heirlooms continue to thrive for generations to come.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-12 border-t border-gray-100 pt-12">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Ancestral Seeds</h4>
                <p className="text-sm text-gray-400">Preserving non-GMO heritage varieties.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Earth Integrity</h4>
                <p className="text-sm text-gray-400">Traditional methods meeting modern tech.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiceHistory;
