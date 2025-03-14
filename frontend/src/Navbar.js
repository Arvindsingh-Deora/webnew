import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/Style/Navbar.css"; // Import CSS
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Arvind</div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/carrer" onClick={() => setIsOpen(false)}>Career</Link>
        </li>
        <li>
          <Link to="/project" onClick={() => setIsOpen(false)}>Project</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
