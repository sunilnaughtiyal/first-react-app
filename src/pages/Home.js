// pages/Home.js
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Testimonials from "../components/Testimonials";
import Contact from "./Contact";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    console.log("[INFO] Home page mounted at", new Date().toISOString());

    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://www.bhaskar.com/rss-v1--category-1061.xml`
    )
      .then((res) => {
        console.log("[INFO] API response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("[INFO] News items received:", data.items?.length || 0);
        setNews(data.items.slice(0, 4));
      })
      .catch((err) => {
        console.error("[ERROR] Failed to fetch news:", err);
      });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "4rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h1>Welcome to the world of Information and Entertainment</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Modern, fast, and built with love for you
        </p>
        <a href="#contact">
          <button
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              backgroundColor: "white",
              color: "#007bff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </a>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <div style={{ padding: 20 }}>
        <h2 style={{ marginBottom: 20 }}>📰 Latest News</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {news.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Contact Form */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
