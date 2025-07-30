import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page 🎉</h1>
      <p>This is a beautifully styled React application with routing and layout.</p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h2>✨ Why React?</h2>
        <ul>
          <li>Reusable Components</li>
          <li>Fast & Interactive</li>
          <li>Great for SPAs</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
