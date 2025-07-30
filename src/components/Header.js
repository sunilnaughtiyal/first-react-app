import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaUserAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css"; // ✅ import the CSS

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            🚀 InfoMasti
          </div>
        </NavLink>

        {/* Hamburger - now aligned right */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaInfoCircle /> About
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaNewspaper /> News
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaUserAlt /> Contact
        </NavLink>
      </nav>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          <FaInfoCircle /> About
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          <FaNewspaper /> News
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          <FaUserAlt /> Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
