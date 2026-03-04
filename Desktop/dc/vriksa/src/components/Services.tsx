'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Shirt, Settings2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Agricultural Products',
    icon: <Sprout className="w-12 h-12" />,
    description: 'Premium organic fruits, vegetables, and groceries sourced from 250 acres of dedicated organic land.',
    link: '#agriculture',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-green-600/20 to-green-900/40'
  },
  {
    title: 'Textile & Garments',
    icon: <Shirt className="w-12 h-12" />,
    description: 'Exquisite linen, cotton, and khadi apparels crafted with traditional precision and modern style.',
    link: '#textile',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-600/20 to-blue-900/40'
  },
  {
    title: 'Engineering & Consulting',
    icon: <Settings2 className="w-12 h-12" />,
    description: 'Innovative engineering solutions and strategic consulting for global infrastructure projects.',
    link: '#engineering',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-600/20 to-orange-900/40'
  }
];

const Services = () => {
  return (
    <section className="py-40 bg-[#fdfdfb]" id="services">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-16 h-1 bg-[#2d5a27] mb-8"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="heading-lg text-center leading-tight"
          >
            Diversified <span className="text-[#2d5a27] font-script text-7xl lowercase">Excellence</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group relative h-[600px] overflow-hidden rounded-[3rem] bg-white shadow-2xl"
            >
              {/* Background with zoom/pan */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  whileHover={{ scale: 1.1, x: 10, y: 10 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full object-cover transition-all duration-1000 saturate-50 group-hover:saturate-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0f1710] via-[#0f1710]/40 to-transparent transition-opacity duration-500`} />
              </div>

              <div className="absolute inset-0 p-12 flex flex-col justify-end z-10">
                <motion.div 
                   whileHover={{ rotate: 360 }}
                   transition={{ duration: 1 }}
                   className="text-[#d4af37] mb-8 p-5 bg-white/10 backdrop-blur-md rounded-2xl w-fit border border-white/20"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>
                
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 font-bold text-[#d4af37] mt-auto w-fit"
                >
                  Discover Vertical
                  <ArrowUpRight className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
