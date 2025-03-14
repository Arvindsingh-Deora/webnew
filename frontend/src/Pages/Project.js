import React from "react";
import '../Style/Pages/Project.css'; // Importing CSS for styling
import { FaLinkedin, FaInstagram, FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Bubble Game",
      description: "A fun, interactive game where players pop bubbles against a timer, built with HTML, CSS, and JavaScript to test reflexes.",
      link: "https://arvindsingh-deora.github.io/bubble-Game-by-Arvind-vapi/",
      thumbnail: "https://images.unsplash.com/photo-1615397586150-313b47e6d09d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80", // Bubble-themed image
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "To-Do List",
      description: "A sleek task management app built with React, offering a smooth and efficient user experience.",
      link: "https://master--cheerful-cassata-2c9e67.netlify.app/",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80", // Task list-themed image
      tech: ["React"],
    },
    {
      title: "EverShop E-commerce",
      description: "An open-source Node.js e-commerce platform designed for scalability and rich features.",
      link: "https://opencollective.com/evershopcommerce",
      thumbnail: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80", // Shopping cart image
      tech: ["Node.js", "MERN"],
    },
    {
      title: "Anon E-commerce",
      description: "A fully responsive e-commerce site built with HTML, CSS, and JavaScript, showcasing modern web design.",
      link: "https://codewithsadee.github.io/anon-ecommerce-website/#",
      thumbnail: "https://images.unsplash.com/photo-1504276048855-f3d3d4c5c1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80", // E-commerce store image
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "BookWyrm Social Media",
      description: "A social platform for book lovers to track reading and connect, built with a community-driven approach.",
      link: "https://joinbookwyrm.com/",
      thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80", // Book-themed image
      tech: ["Unknown"], // Replace with actual tech if known
    },
  ];

  const socialLinks = [
    { url: "https://www.linkedin.com/in/arvindsingh-deora-043707223", icon: <FaLinkedin />, alt: "LinkedIn" },
    { url: "https://www.instagram.com/arvind_deora_12/", icon: <FaInstagram />, alt: "Instagram" },
    { url: "https://github.com/Arvindsingh-Deora", icon: <FaGithub />, alt: "GitHub" },
    { url: "https://linktr.ee/arvind_deora_12", icon: <FaLink />, alt: "Linktree" },
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.thumbnail} alt={`${project.title} Thumbnail`} className="project-thumbnail" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <h3>Pages</h3>
            <a href="#top">Home</a>
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-services">
            <h3>Services</h3>
            <p>Web Development</p>
            <p>UI/UX Design</p>
            <p>Backend Development</p>
            <p>Competitive Programming Solutions</p>
          </div>
          <div className="footer-social">
            <h3>Connect</h3>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Arvindsingh Deora. All Rights Reserved.</p>
          <a href="https://github.com/Arvindsingh-Deora" target="_blank" rel="noopener noreferrer">Explore My Work</a>
        </div>
      </footer>
    </div>
  );
};

export default Projects;