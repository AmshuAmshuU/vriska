import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Elevate Your Lifestyle</h1>
          <p className={styles.heroText}>
            Discover our curated collection of premium products, designed to
            inspire and endure.
          </p>
          <Link href="/shop" className="btn btn-primary">
            Shop Now{" "}
            <ArrowRight
              size={18}
              className="ml-2"
              style={{ marginLeft: "0.5rem" }}
            />
          </Link>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200"
            alt="Hero Image"
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="text-3xl">Featured Collection</h2>
            <Link href="/shop" className={styles.viewAll}>
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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
        </div>
      </section>

      {/* Categories / Banner */}
      <section className={styles.promo}>
        <div className="container">
          <div className={styles.promoContent}>
            <h2 className={styles.promoTitle}>New Arrivals for Summer</h2>
            <p className={styles.promoText}>
              Check out the latest trends and styles.
            </p>
            <Link href="/shop?category=new" className="btn btn-secondary">
              Explore New Arrivals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
