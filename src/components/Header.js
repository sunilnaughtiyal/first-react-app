// src/components/Header.js
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaUserAlt,
  FaBars,
  FaTimes,
  FaFireAlt,
  FaSignOutAlt,
  FaIdBadge,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

import { supabase } from "../pages/supabaseClient";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    navigate("/");
  };

  return (
    <header>
      <div className="header-container">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            <div className="flex items-center gap-2">
              <FaFireAlt size={32} color="#4ade80" />
              <span className="text-xl font-bold">InfoMasti</span>
            </div>
          </div>
        </NavLink>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className="desktop-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}><FaHome /> Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}><FaInfoCircle /> AboutMe</NavLink>
        <NavLink to="/news" className={({ isActive }) => (isActive ? "active" : "")}><FaNewspaper /> News</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}><FaUserAlt /> Contact</NavLink>

        {!session ? (
          <>
            <NavLink to="/signin" className={({ isActive }) => (isActive ? "active" : "")}><FaSignInAlt /> Sign In</NavLink>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}><FaUserPlus /> Sign Up</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}><FaIdBadge /> Profile</NavLink>
            <button onClick={handleLogout} className="logout-btn"><FaSignOutAlt /> Logout</button>
          </>
        )}
      </nav>

      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}><FaHome /> Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}><FaInfoCircle /> About</NavLink>
        <NavLink to="/news" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}><FaNewspaper /> News</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}><FaUserAlt /> Contact</NavLink>

        {!session ? (
          <>
            <NavLink to="/signin" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}><FaSignInAlt /> Sign In</NavLink>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}><FaUserPlus /> Sign Up</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}><FaIdBadge /> Profile</NavLink>
            <button onClick={handleLogout} className="logout-btn"><FaSignOutAlt /> Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
