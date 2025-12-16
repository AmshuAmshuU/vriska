"use client";

import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, total, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-16 text-center">
        <div className={styles.emptyIcon}>
          <ShoppingBag size={64} strokeWidth={1} />
        </div>
        <h2 className="text-2xl mb-4 font-semibold">Your cart is empty</h2>
        <p className="text-muted mb-8">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link href="/shop" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl mb-8">Shopping Cart</h1>

      <div className={styles.layout}>
        {/* Cart Items */}
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemImageWrapper}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.itemImage}
                />
              </div>

              <div className={styles.itemContent}>
                <div className={styles.itemInfo}>
                  <Link
                    href={`/product/${item.id}`}
                    className={styles.itemName}
                  >
                    {item.name}
                  </Link>
                  <p className={styles.itemCategory}>{item.category}</p>
                </div>

                <div className={styles.itemActions}>
                  <div className={styles.qtyControl}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className={styles.qtyValue}>{item.quantity}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <p className={styles.itemPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className={styles.summary}>
          <div className={styles.summaryCard}>
            <h3 className={styles.summaryTitle}>Order Summary</h3>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="btn btn-primary w-full">
              Proceed to Checkout{" "}
              <ArrowRight
                size={18}
                className="ml-2"
                style={{ marginLeft: "0.5rem" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
