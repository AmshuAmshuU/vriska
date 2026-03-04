'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, Shield, Sun } from 'lucide-react';

const benefits = [
  { icon: Zap, title: "Energy Boost", desc: "A great source of complex carbohydrates for sustained vitality." },
  { icon: Heart, title: "Heart Health", desc: "low in sodium and fats, promoting cardiovascular wellness." },
  { icon: Shield, title: "Digestive Care", desc: "Gentle on the stomach and naturally gluten-free." },
  { icon: Sun, title: "Vital Nutrients", desc: "Rich in essential minerals like Manganese and Selenium." }
];

const RiceBenefits = () => {
  return (
    <section className="py-40 bg-[#0f1710] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Wholesome <span className="text-[#d4af37] font-script lowercase text-7xl">Nourishment</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto italic">Science meets nature in every grain.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-[#2d5a27]/20 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#d4af37] flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                <benefit.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
              <p className="text-gray-400 leading-relaxed font-light">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiceBenefits;
