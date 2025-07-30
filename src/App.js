import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Header />
      <main className="fade-in">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/news" element={<News />} />
  </Routes>
</main>
      <Footer />
    </Router>
  );
}

export default App;
