"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 3000);
    }, 1000);
  };

  return (
    <div className="container py-16">
      <div className={styles.header}>
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          We'd love to hear from you. Our friendly team is always here to chat.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Contact Info */}
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Chat with us</h3>
                <p className={styles.infoText}>Our team is here to help.</p>
                <a
                  href="mailto:support@luxestore.com"
                  className={styles.infoLink}
                >
                  support@luxestore.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Visit us</h3>
                <p className={styles.infoText}>
                  Come say hello at our office HQ.
                </p>
                <p className={styles.infoDetail}>
                  100 Smith Street
                  <br />
                  Collingwood VIC 3066 AU
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Call us</h3>
                <p className={styles.infoText}>Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+15550000000" className={styles.infoLink}>
                  +1 (555) 000-0000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className={styles.input}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className={styles.input}
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className={styles.textarea}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending..."
                  : isSent
                  ? "Message Sent!"
                  : "Send Message"}
                {!isSubmitting && !isSent && (
                  <Send
                    size={18}
                    className="ml-2"
                    style={{ marginLeft: "0.5rem" }}
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
