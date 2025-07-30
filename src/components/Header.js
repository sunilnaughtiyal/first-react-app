import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaNewspaper } from 'react-icons/fa';

function Header() {
  const linkStyle = {
    color: 'white',
    marginLeft: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const activeStyle = {
    textDecoration: 'underline',
    color: '#ffdd57',
  };

  return (
    <header>
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          🚀 InfoMasti
        </div>
      </NavLink>

      <nav>
        <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          <FaHome />Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          <FaInfoCircle />About
        </NavLink>
        <NavLink to="/news" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          <FaNewspaper />News
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}


export default Header;
