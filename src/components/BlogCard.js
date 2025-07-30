import React from 'react';

function BlogCard({ title, body }) {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '1rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      flex: '1 1 30%',
      minWidth: '250px'
    }}>
      <h3>{title.slice(0, 50)}...</h3>
      <p>{body.slice(0, 100)}...</p>
    </div>
  );
}

export default BlogCard;
