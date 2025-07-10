import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaLink, FaLightbulb } from "react-icons/fa";
import "../Style/Footer.css";

const Footer = () => {
  const socialLinks = [
    { url: "https://github.com/Arvindsingh-Deora", icon: <FaGithub /> },
    { url: "https://linkedin.com/in/arvindsinghdeora", icon: <FaLinkedin /> },
    { url: "https://instagram.com/arvindsingh.deora", icon: <FaInstagram /> },
    { url: "https://linktr.ee/arvind_deora_12", icon: <FaLightbulb /> },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Pages</h3>
          <Link to="/">Home</Link>
          <Link to="/Notes">Notes</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/Service">Services</Link>
          <Link to="/carrer">Career</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Project</Link>
        </div>
        <div className="footer-services">
          <h3>Services</h3>
          <p>Web Development</p>
          <p>UI/UX Design</p>
          <p>Backend Development</p>
          <p>Competitive Programming</p>
        </div>
        <div className="footer-social">
          <h3>Connect</h3>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Arvindsingh Deora. Crafted with Passion.</p>
        <Link to="/project">Explore My Work</Link>
      </div>
    </footer>
  );
};

export default Footer;
