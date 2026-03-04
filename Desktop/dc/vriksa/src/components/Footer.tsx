'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-[#d4af37] w-8 h-8" />
              <span className="text-2xl font-bold tracking-tighter text-white">VRIKSA</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Excellence in Agricultural Products, Textiles, and Engineering Consulting. 
              Bridging global markets with organic purity and traditional craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#2d5a27] hover:border-[#2d5a27] transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#2d5a27] hover:border-[#2d5a27] transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#2d5a27] hover:border-[#2d5a27] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#2d5a27] hover:border-[#2d5a27] transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">About Us</a></li>
              <li><a href="#agriculture" className="hover:text-[#d4af37] transition-colors">Agriculture</a></li>
              <li><a href="#textile" className="hover:text-[#d4af37] transition-colors">Textile & Garments</a></li>
              <li><a href="#engineering" className="hover:text-[#d4af37] transition-colors">Engineering & Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Agri Portfolio</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Rice & Millets</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Fruits & Vegetables</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Spices & Oils</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Dry Fruits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-[#d4af37] shrink-0 mt-1" />
                <span>+91-9632992999</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-[#d4af37] shrink-0 mt-1" />
                <span>info@vriksa.company</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-[#d4af37] shrink-0 mt-1" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2021 Vriksa & Co. | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
