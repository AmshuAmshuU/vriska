"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";
import styles from "./page.module.css";
import { products } from "@/data/products";

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "All"
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  useEffect(() => {
    let result = products;

    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  return (
    <div className="container py-8">
      <div className={styles.header}>
        <h1 className="text-3xl">Shop</h1>
        <p className="text-muted">
          Find everything you need for your premium lifestyle.
        </p>
      </div>

      <div className={styles.layout}>
        {/* Filters Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <Search size={18} className="text-muted" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterSection}>
            <div className={styles.filterHeader}>
              <SlidersHorizontal size={18} />
              <span className="font-semibold">Categories</span>
            </div>
            <ul className={styles.categoryList}>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={`${styles.categoryBtn} ${
                      selectedCategory === cat ? styles.active : ""
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className={styles.productGrid}>
          {filteredProducts.length === 0 ? (
            <div className={styles.noResults}>
              <p>No products found matching your criteria.</p>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className={styles.productCard}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <p className={styles.category}>{product.category}</p>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
