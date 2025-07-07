import React from "react";
import '../Style/Pages/Project.css'; // Importing CSS for styling
import { FaLinkedin, FaInstagram, FaGithub, FaLink } from 'react-icons/fa';

// Import thumbnails
import bubbleGameThumb from '../assets/Thumnail/Bubble game.png';
import mechcareThumb from '../assets/Thumnail/Mechcare.png';
import healthcareThumb from '../assets/Thumnail/Healthcare.png';
import chatSystemThumb from '../assets/Thumnail/Chat System.png';

// Project data
const projectsData = [
  {
    title: "Bubble Game",
    description: "A fun, interactive game where players pop bubbles against a timer, built with HTML, CSS, and JavaScript to test reflexes.",
    link: "https://arvindsingh-deora.github.io/bubble-Game-by-Arvind-vapi/",
    thumbnail: bubbleGameThumb,
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "To-Do List",
    description: "A sleek task management app built with React, offering a smooth and efficient user experience.",
    link: "https://master--cheerful-cassata-2c9e67.netlify.app/",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    tech: ["React"],
  },
  {
    title: "Mechcare",
    description: "India's Biggest Mechanic Platform, connecting users with reliable automotive services.",
    link: "https://mechcarenew.vercel.app/",
    thumbnail: mechcareThumb,
    tech: ["Node.js", "MERN"],
  },
  {
    title: "Healthcare",
    description: "An AI-powered healthcare assistant providing personalized health insights.",
    link: "https://health-phi-five.vercel.app/",
    thumbnail: healthcareThumb,
    tech: ["Python", "Machine Learning", "LLM"],
  },
  {
    title: "Chat System",
    description: "A real-time personal AI chat system for seamless communication.",
    link: "https://chat-application-three-pearl.vercel.app/",
    thumbnail: chatSystemThumb,
    tech: ["React", "Node.js", "Socket.io"],
  },
];

// Social links data
const socialLinksData = [
  { url: "https://www.linkedin.com/in/arvindsingh-deora-043707223", icon: <FaLinkedin />, alt: "LinkedIn" },
  { url: "https://www.instagram.com/arvind_deora_12/", icon: <FaInstagram />, alt: "Instagram" },
  { url: "https://github.com/Arvindsingh-Deora", icon: <FaGithub />, alt: "GitHub" },
  { url: "https://linktr.ee/arvind_deora_12", icon: <FaLink />, alt: "Linktree" },
];

// Project Card Component
const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card"
    aria-label={`View ${project.title} project`}
  >
    <img
      src={project.thumbnail}
      alt={`${project.title} Thumbnail`}
      className="project-thumbnail"
      loading="lazy"
    />
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
);

// Footer Component
const Footer = () => (
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
        {socialLinksData.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label={link.alt}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Arvindsingh Deora. All Rights Reserved.</p>
      <a href="https://github.com/Arvindsingh-Deora" target="_blank" rel="noopener noreferrer">
        Explore My Work
      </a>
    </div>
  </footer>
);

// Main Projects Component
const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;