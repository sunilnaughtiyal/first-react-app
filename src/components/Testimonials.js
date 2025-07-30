import React from 'react';

const testimonials = [
  { name: 'Amit', text: 'This app is awesome! 💯' },
  { name: 'Sunita', text: 'Loved the UI and speed.' },
  { name: 'Ravi', text: 'Perfect for my needs.' },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '2rem', background: '#f9f9f9' }}>
      <h2>What People Say</h2>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            width: '250px',
            background: '#fff'
          }}>
            <strong>{t.name}</strong>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

