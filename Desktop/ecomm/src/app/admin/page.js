"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Package,
  Users,
  DollarSign,
  ShoppingBag,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";
import styles from "./page.module.css";
import { useAuth } from "@/context/AuthContext";
import { products as initialProducts } from "@/data/products";

export default function AdminDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [products] = useState(initialProducts);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/login");
    }
  }, [user, router]);

  if (!user || user.role !== "admin") {
    return null; // Or loading spinner
  }

  const stats = [
    {
      label: "Total Sales",
      value: "$12,450.00",
      icon: DollarSign,
      color: "#10b981",
    },
    {
      label: "Total Orders",
      value: "154",
      icon: ShoppingBag,
      color: "#3b82f6",
    },
    { label: "Total Products", value: "45", icon: Package, color: "#8b5cf6" },
    { label: "Total Customers", value: "89", icon: Users, color: "#f59e0b" },
  ];

  return (
    <div className="container py-8">
      <div className={styles.header}>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button className="btn btn-primary">
          <Plus size={18} className="mr-2" style={{ marginRight: "0.5rem" }} />{" "}
          Add Product
        </button>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div
              className={styles.statIconWrapper}
              style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
            >
              <stat.icon size={24} />
            </div>
            <div>
              <p className={styles.statLabel}>{stat.label}</p>
              <p className={styles.statValue}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Product Management</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className={styles.productImgWrapper}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={styles.productImg}
                      />
                    </div>
                  </td>
                  <td className="font-medium">{product.name}</td>
                  <td className="text-muted">{product.category}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    <div className="flex gap-2">
                      <button className={styles.actionBtn} aria-label="Edit">
                        <Edit size={16} />
                      </button>
                      <button
                        className={`${styles.actionBtn} ${styles.deleteBtn}`}
                        aria-label="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
