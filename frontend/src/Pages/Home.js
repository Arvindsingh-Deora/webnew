import React, { useEffect, useRef } from "react";
import "../Style/Pages/Home.css";
import myPhoto from "../assets/Arvind.jpg";
import { FaLinkedin, FaInstagram, FaGithub, FaLink } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Helmet } from "react-helmet";

const Home = () => {
  const skills = [
    { name: "React", percentage: 85 },
    { name: "JavaScript", percentage: 87 },
    { name: "MongoDB", percentage: 80 },
    { name: "Node.js", percentage: 82 },
    { name: "Java", percentage: 86 },
  ];

  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/arvindsingh-deora-043707223",
      icon: <FaLinkedin />,
    },
    {
      url: "https://www.instagram.com/arvind_deora_12/",
      icon: <FaInstagram />,
    },
    {
      url: "https://github.com/Arvindsingh-Deora",
      icon: <FaGithub />,
    },
    {
      url: "https://linktr.ee/arvind_deora_12",
      icon: <FaLink />,
    },
  ];

  const skillRefs = useRef([]);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Arvind Deora | Vapi | Personal Portfolio | Notes | Engineer
        </title>
        <meta
          name="description"
          content="This is the official site of Arvind Deora from Vapi. Explore technical notes, blog posts, portfolio and free resources. Computer Network, DBMS, OS, and more."
        />
        <meta
          name="keywords"
          content="Arvind Vapi, Arvind Deora, Vapi Engineer, Personal Portfolio, DBMS Notes, Computer Network Notes"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Arvind Deora",
              "url": "https://webnew-front.onrender.com/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vapi",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://www.linkedin.com/in/arvindsingh-deora-043707223", 
                "https://github.com/Arvindsingh-Deora"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="home-container" id="home">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50, density: { enable: true, value_area: 800 } },
              color: { value: "#ff6b6b" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 3, random: true },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
              },
            },
            interactivity: {
              events: { onhover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
          }}
        />

        {/* Intro Section */}
        <div className="intro-section">
          <div className="home-text">
            <h1>Arvindsingh Deora</h1>
            <p className="typing-effect">
              MERN Stack Developer | Competitive Programmer
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-logo"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="cta-buttons">
              <a
                href="/Arvind_SDE_Resume.pdf"
                download
                className="resume-btn"
              >
                Download Resume
              </a>
              <a href="/contact" className="contact-btn">
                Contact Me
              </a>
            </div>
          </div>
          <div className="home-image">
            <img src={myPhoto} alt="Arvindsingh Deora" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2>My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-bar"
                ref={(el) => (skillRefs.current[index] = el)}
              >
                <span className="skill-name">{skill.name}</span>
                <div className="progress-tube">
                  <div
                    className="progress-fill"
                    style={{
                      width: skillRefs.current[index]?.classList.contains(
                        "animate"
                      )
                        ? `${skill.percentage}%`
                        : "0%",
                      opacity: 0.9,
                    }}
                  >
                    <span className="percentage">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="about-section" id="about">
          <h2 className="about-heading">About Me</h2>
          <p>
            I’m a passionate developer with expertise in crafting scalable web
            applications using the MERN stack (MongoDB, Express.js, React,
            Node.js) and a knack for solving complex problems through
            competitive programming. My journey blends creativity and logic,
            delivering solutions that are both efficient and elegant. Let’s
            build something extraordinary together!
          </p>
          <a href="/about" className="know-more-btn">
            Explore My Journey
          </a>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <h3>Pages</h3>
              <a href="#home">Home</a>
              <a href="/career">Services</a>
              <a href="/about">About</a>
              <a href="/project">Project</a>
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
            <a
              href="https://github.com/Arvindsingh-Deora"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore My Work
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
