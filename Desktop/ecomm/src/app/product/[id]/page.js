"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import styles from "./page.module.css";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl mb-4">Product Not Found</h2>
        <Link href="/shop" className="btn btn-primary">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="container py-8">
      <button onClick={() => router.back()} className={styles.backBtn}>
        <ArrowLeft size={18} /> Back to Results
      </button>

      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        <div className={styles.details}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>${product.price.toFixed(2)}</p>

          <div className={styles.divider}></div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.actions}>
            <div className={styles.quantityControl}>
              <button
                onClick={decrementQty}
                className={styles.qtyBtn}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button onClick={incrementQty} className={styles.qtyBtn}>
                +
              </button>
            </div>

            <button
              className={`btn btn-primary ${styles.addBtn} ${
                isAdded ? styles.added : ""
              }`}
              onClick={handleAddToCart}
              disabled={isAdded}
            >
              {isAdded ? (
                <>
                  <Check
                    size={20}
                    className="mr-2"
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart
                    size={20}
                    className="mr-2"
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
