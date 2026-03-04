'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Microscope, Warehouse } from 'lucide-react';

const AboutAgri = () => {
  const stats = [
    { icon: <ShieldCheck size={24} />, label: 'Organic Certified', desc: 'Sourced from 250 acres of organic land.' },
    { icon: <Microscope size={24} />, label: 'Tech Driven', desc: 'Hydroponics & Aqua-phonics research.' },
    { icon: <Warehouse size={24} />, label: 'Modern Storage', desc: 'Advanced warehouse technologies.' },
    { icon: <CheckCircle2 size={24} />, label: 'Quality First', desc: 'Global standards for every harvest.' },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden py-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Artistic border/accents */}
            <div className="absolute -inset-4 border border-[#2d5a27]/20 rounded-[4rem] -z-1" />
            
            <div className="relative overflow-hidden rounded-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
              <motion.img 
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Organic Farming" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.5 }}
              className="absolute -bottom-12 -right-12 bg-[#2d5a27] p-10 rounded-[3rem] shadow-2xl z-20 hidden md:block border-8 border-white"
            >
              <p className="text-4xl text-white font-bold leading-tight">250+</p>
              <p className="text-green-100 text-sm font-medium tracking-widest uppercase">Organic Acres</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#d4af37] font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Sustainable Future</span>
            <h2 className="heading-lg mb-8 leading-tight">Empowering <span className="text-[#2d5a27]">Organic Communities</span> Through Tech</h2>
            
            <p className="text-gray-500 text-xl leading-relaxed mb-10 font-light">
              We invested in Agriculture to import new technologies for our farmers and in turn learnt the importance of organic farming and our methodologies. 
            </p>
            
            <div className="space-y-8 mb-12">
              <p className="text-gray-600 leading-relaxed border-l-4 border-[#d4af37] pl-8 italic">
                &ldquo;We invest in warehouse technologies for farmers to conserve their yield to attain better prices and to tackle supply on demand.&rdquo;
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-6 items-start"
                >
                  <div className="text-[#2d5a27] shrink-0 p-3 bg-[#2d5a27]/5 rounded-2xl group-hover:bg-[#2d5a27] group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{stat.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgri;
