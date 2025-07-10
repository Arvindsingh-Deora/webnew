import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/Style/Navbar.css"; // CSS path
import { FaBars, FaTimes } from "react-icons/fa"; // Menu icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Arvind</div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/Notes" onClick={() => setMenuOpen(false)}>Notes</Link></li>
        <li><Link to="/Service" onClick={() => setMenuOpen(false)}>Service</Link></li>
        <li><Link to="/carrer" onClick={() => setMenuOpen(false)}>Career</Link></li>
        <li><Link to="/project" onClick={() => setMenuOpen(false)}>Project</Link></li>
        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
      </ul>

      {/* Mobile Menu Toggle Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
