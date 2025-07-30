import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>🚀 InfoMasti</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
      </nav>
    </header>
  );
}

export default Header;
