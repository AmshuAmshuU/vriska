'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sprout, Sun, Droplets, ShoppingBag, Truck } from 'lucide-react';

const steps = [
  { icon: <Sprout size={32} className="text-white" />, title: "Organic Sowing", desc: "Selected non-GMO seeds sown in 250 acres of certified land." },
  { icon: <Sun size={32} className="text-white" />, title: "Natural Growth", desc: "No synthetic pesticides. Just sun, soil, and soul." },
  { icon: <Droplets size={32} className="text-white" />, title: "Pure Irrigation", desc: "Rainwater harvesting and mineral-rich aqua-phonics." },
  { icon: <Truck size={32} className="text-white" />, title: "Cold Transport", desc: "Direct from farm to distribution in record time." },
  { icon: <ShoppingBag size={32} className="text-white" />, title: "Your Table", desc: "Chemical-free, nutrient-dense products for your family." }
];

const SeedToTable = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-40 bg-[#0f1710] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-32"
        >
          <h2 className="heading-lg text-white">The <span className="text-[#d4af37]">Seed to Table</span> Journey</h2>
          <p className="text-gray-400 max-w-xl mx-auto italic">Transparency in every step of our process.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden lg:block" />
          <motion.div 
            style={{ scaleX: pathLength }}
            className="absolute top-1/2 left-0 w-full h-1 bg-[#d4af37] -translate-y-1/2 origin-left hidden lg:block z-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 relative z-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center px-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border-2 ${
                    index % 2 === 0 ? 'bg-[#2d5a27] border-[#3d7a35]' : 'bg-[#d4af37] border-[#e5c158]'
                  } shadow-[0_0_30px_rgba(212,175,55,0.2)]`}
                >
                  {step.icon}
                </motion.div>
                
                <h4 className="text-xl font-bold mb-4 text-[#d4af37]">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                   {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedToTable;
