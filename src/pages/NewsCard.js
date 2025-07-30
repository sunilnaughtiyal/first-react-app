// components/NewsCard.js
import React from 'react';

const NewsCard = ({ item }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 10,
      padding: 16,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    }}>
      {item.thumbnail && (
        <img
          src={item.thumbnail}
          alt="news"
          style={{
            width: '100%',
            height: 180,
            objectFit: 'cover',
            borderRadius: 8,
            marginBottom: 12,
          }}
        />
      )}
      <h3 style={{ fontSize: 18, marginBottom: 8 }}>{item.title}</h3>
      <p style={{ fontSize: 12, color: '#666' }}>{item.pubDate}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto', color: '#007BFF' }}>
        Read More →
      </a>
    </div>
  );
};

export default NewsCard;
