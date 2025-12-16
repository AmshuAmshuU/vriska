"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            LuxeStore
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`${styles.navLinks} ${isMenuOpen ? styles.show : ""}`}
          >
            <Link
              href="/"
              className={styles.link}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={styles.link}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className={styles.link}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Search">
              <Search size={20} />
            </button>
            <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
              <ShoppingCart size={20} />
              <span className={styles.badge}>0</span>
            </Link>
            <Link href="/login" className={styles.iconBtn} aria-label="Account">
              <User size={20} />
            </Link>
            <button
              className={styles.menuBtn}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
