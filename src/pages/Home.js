import React, { useEffect, useState } from 'react';
import Testimonials from '../components/Testimonials';
import BlogCard from '../components/BlogCard';
import Contact from '../components/Contact';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fake API call using JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#007bff', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
        <h1>🚀 Welcome to My React App</h1>
        <p style={{ fontSize: '1.2rem' }}>Modern, fast, and built with love in React.</p>
        <button style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: 'white', color: '#007bff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Get Started
        </button>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* News via API */}
      <section style={{ margin: '2rem 0' }}>
        <h2>📰 Latest News</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {news.map(item => <BlogCard key={item.id} title={item.title} body={item.body} />)}
        </div>
      </section>

      {/* Contact Form */}
      <Contact />
    </div>
  );
}

export default Home;
