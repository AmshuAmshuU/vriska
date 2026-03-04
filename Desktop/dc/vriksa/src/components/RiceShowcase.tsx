'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Search, Filter } from 'lucide-react';
import rajamudi from "../../public/images/rice/rajmudi-rice.jpg"
import navara from "../../public/images/rice/navara-rice.jpg"
import sona1 from "../../public/images/rice/sona-masoori-polish.jpg"
import sonaunpolished from "../../public/images/rice/sona-masoori-unpolish.jpg"
import sonasingle from "../../public/images/rice/Sona-Masuri-Rice-Single-Polish.jpg"
import hmt from "../../public/images/rice/hmt-traditional-super-fine-rice.jpg"
import redrice from "../../public/images/rice/red-rice.png"
import gandhasale from "../../public/images/rice/gandhasale.png"
import siddasanna from "../../public/images/rice/siddasanna.png"
import gangavathi from "../../public/images/rice/gangavathi-sanna.png"
import diana from "../../public/images/rice/diana.png"
import black from "../../public/images/rice/black-rice.png"
import dosa from "../../public/images/rice/dosa-rice.png"
import bamboo from "../../public/images/rice/bamboo.png"
import chinnakamini from "../../public/images/rice/chinna-kamini.png"
import whitebasmati from "../../public/images/rice/white-basmati.png"
import kaminirice from "../../public/images/rice/kamini-rice.png"

const riceVarieties = [
  { id: 1, name: 'Rajamudi Rice', type: 'Traditional', image: rajamudi, desc: 'A royal heritage grain known for its rich flavor and nutritional value.' },
  { id: 2, name: 'Navara Rice', type: 'Medicinal', image: navara, desc: 'Healing grain from the heart of Ayurveda, celebrated for its health benefits.' },
  { id: 3, name: 'Sona Masuri (Polished)', type: 'Daily', image: sona1, desc: 'Lightweight and aromatic, perfect for everyday rice dishes.' },
  { id: 4, name: 'Sona Masuri (Un-polished)', type: 'Natural', image: sonaunpolished, desc: 'Whole grain goodness with maximum nutrient retention.' },
  { id: 5, name: 'Sona Masuri (Single Polished)', type: 'Premium', image: sonasingle, desc: 'A balanced blend of flavor and nutrition.' },
  { id: 6, name: 'HMT Traditional', type: 'Fine', image: hmt, desc: 'Superfine grain with an exquisite texture and delicate aroma.' },
  { id: 7, name: 'Red Rice', type: 'Traditional', image: redrice, desc: 'Nutrient-rich grain with an earthy flavor and firm texture.' },
  { id: 8, name: 'Gandhasale Rice', type: 'Aromatic', image: gandhasale, desc: 'Short grain with an intense natural fragrance, ideal for special occasions.' },
  { id: 9, name: 'Siddasanna Rice', type: 'Traditional', image: siddasanna, desc: 'Classic South Indian variety favored for its digestibility.' },
  { id: 10, name: 'Gangavathi Sanna', type: 'Fine', image: gangavathi, desc: 'Locally grown superfine rice known for its purity.' },
  { id: 11, name: 'Diana Rice', type: 'Premium', image: diana, desc: 'A unique variety with a distinct character and premium feel.' },
  { id: 12, name: 'Black Rice', type: 'Exotic', image: black, desc: 'The \"Forbidden Rice\", rich in antioxidants and anthocyanins.' },
  { id: 13, name: 'Dosa Rice', type: 'Functional', image: dosa, desc: 'Specially selected for creating the perfect, crispy dosas.' },
  { id: 14, name: 'Bamboo Rice', type: 'Exotic', image: bamboo, desc: 'A rare forest-grown grain collected from flowering bamboo.' },
  { id: 15, name: 'Chinna Kamini', type: 'Aromatic', image: chinnakamini, desc: 'Tiny, highly aromatic grains that pack a punch of flavor.' },
  { id: 16, name: 'White Basmati', type: 'Premium', image: whitebasmati, desc: 'The king of aromatics, with long, slender grains.' },
  { id: 17, name: 'Kamini Bhog', type: 'Exotic', image: kaminirice, desc: 'A festive aromatic rice from East India.' }
];

const categories = ['All', 'Traditional', 'Premium', 'Exotic', 'Fine', 'Daily'];

const RiceShowcase = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = riceVarieties.filter(v => 
    (filter === 'All' || v.type === filter) &&
    (v.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="py-10 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-[#0f1710] mb-4">The Global <span className="text-[#2d5a27] font-script">Collection</span></h3>
            <p className="text-gray-400">Discover 17 unique varieties of heritage grains.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search variety..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 pr-6 py-3 rounded-full border border-gray-100 focus:border-[#2d5a27] outline-none transition-all w-64 text-sm"
              />
            </div>
            <div className="flex gap-2 bg-gray-50 p-1 rounded-full">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-[#2d5a27] text-white' : 'text-gray-400 hover:text-[#2d5a27]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative"
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-700 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <Image 
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#2d5a27] mb-2 block">{item.type}</span>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                      <p className="text-xs text-gray-500 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filtered.length === 0 && (
          <div className="text-center py-40">
            <p className="text-gray-400 text-lg">No varieties found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RiceShowcase;
