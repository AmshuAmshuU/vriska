"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, Package, Clock, ShieldCheck, LogOut } from "lucide-react";
import styles from "./page.module.css";
import { useAuth } from "@/context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  // Mock Orders
  const orders = [
    {
      id: "#ORD-1023",
      date: "Oct 24, 2023",
      status: "Delivered",
      total: 129.0,
      items: 2,
    },
    {
      id: "#ORD-1021",
      date: "Sep 12, 2023",
      status: "Delivered",
      total: 349.99,
      items: 1,
    },
    {
      id: "#ORD-0992",
      date: "Aug 05, 2023",
      status: "Processing",
      total: 79.99,
      items: 1,
    },
  ];

  return (
    <div className="container py-8">
      <div className={styles.header}>
        <div>
          <h1 className="text-3xl font-bold mb-2">My Account</h1>
          <p className="text-muted">Manage your orders and personal details.</p>
        </div>
        <button
          onClick={logout}
          className="btn btn-outline text-muted"
          aria-label="Sign Out"
        >
          <LogOut
            size={18}
            className="mr-2"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Sign Out
        </button>
      </div>

      <div className={styles.grid}>
        {/* Profile Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <User size={20} />
            <h3>Profile Information</h3>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.infoRow}>
              <span className={styles.label}>Name</span>
              <span className={styles.value}>{user.name}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>{user.email}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Role</span>
              <span className={styles.value}>
                <span
                  className={`${styles.badge} ${
                    user.role === "admin" ? styles.admin : ""
                  }`}
                >
                  {user.role}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Orders Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Package size={20} />
            <h3>Recent Orders</h3>
          </div>
          <div className={styles.cardBody}>
            {orders.length > 0 ? (
              <div className={styles.ordersList}>
                {orders.map((order) => (
                  <div key={order.id} className={styles.orderItem}>
                    <div className={styles.orderInfo}>
                      <span className={styles.orderId}>{order.id}</span>
                      <span className={styles.orderDate}>{order.date}</span>
                    </div>
                    <div className={styles.orderMeta}>
                      <span
                        className={`${styles.status} ${
                          styles[order.status.toLowerCase()]
                        }`}
                      >
                        {order.status}
                      </span>
                      <span className={styles.orderTotal}>
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted text-center py-4">No orders found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
