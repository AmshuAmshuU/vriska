"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Agriculture", href: "/#agriculture" },
    { name: "Rice Varieties", href: "/food/rice" },
    { name: "Textile", href: "/#textile" },
    { name: "Engineering", href: "/#engineering" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Leaf className={`${isScrolled ? 'text-[#2d5a27]' : 'text-white'} w-8 h-8 transition-colors duration-300`} />
          <span className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${
            isScrolled ? 'text-[#2d5a27]' : 'text-white'
          }`}>
            VRIKSA
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`nav-link ${
                isScrolled 
                  ? "text-gray-900 dark:text-gray-100" 
                  : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              }`}
            >
              {link.name}
            </motion.a>
          ))}
          <button className={`px-6 py-2 rounded-full font-bold transition-all shadow-xl hover:scale-105 active:scale-95 ${
            isScrolled 
              ? "bg-[#2d5a27] text-white hover:bg-[#3d7a35]" 
              : "bg-white text-[#2d5a27] hover:bg-gray-100"
          }`}>
            Inquiry
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black p-6 border-t border-gray-100 dark:border-gray-800"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-gray-900 dark:text-white hover:text-[#2d5a27] transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
