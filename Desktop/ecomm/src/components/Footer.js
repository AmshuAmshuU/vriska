import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.brand}>LuxeStore</h3>
            <p className={styles.description}>
              Premium quality products for your lifestyle. Elevate your everyday
              with our curated collection.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Shop</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/shop">All Products</Link>
              </li>
              <li>
                <Link href="/shop?category=new">New Arrivals</Link>
              </li>
              <li>
                <Link href="/shop?category=featured">Featured</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Support</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping & Returns</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Newsletter</h4>
            <p className={styles.text}>
              Subscribe to get special offers and updates.
            </p>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.input}
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} LuxeStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
