import React, { useEffect, useRef } from "react";
import '../Style/Pages/About.css'; // Importing CSS for styling
import { FaLinkedin, FaInstagram, FaGithub, FaLink } from 'react-icons/fa';


const About = () => {
  const education = [
    {
      institute: "Laxmi Institute of Technology, Gujarat, India",
      degree: "Bachelor of Engineering in Computer Science Engineering",
      duration: "2020 – 2024",
      details: "CGPA: 8.51",
    },
    {
      institute: "St. Xavier’s High School (CBSE), Vapi",
      degree: "HSC (PCM)",
      duration: "",
      details: "",
    },
  ];

  const experiences = [
    {
      company: "Veer Jeet",
      role: "MERN Stack Developer",
      duration: "December 2024 – Present",
      details: "Built a Transport Delivery Management System using the MERN stack to track and manage logistics operations, enhancing real-time monitoring and efficiency.",
    },
    {
      company: "RND Technosoft, Vapi, Gujarat",
      role: "MERN Stack Developer",
      duration: "Sept – Nov 2024",
      details: "Developed a comprehensive Chemical CRM using the MERN stack (MongoDB, Express.js, React, Node.js) to manage chemical data, customer interactions, and supplier records. Implemented secure user authentication and data visualization with AG Grid, improving operational efficiency and user experience.",
    },
    {
      company: "Allorasoft, Vapi, Gujarat",
      role: "MERN Stack Developer",
      duration: "Jan – July 2024",
      details: "Built an Order Tracker application using the MERN stack, streamlining order tracking and management processes. Developed features for order updates and user notifications, boosting operational efficiency and customer satisfaction.",
    },
  ];

  const socialLinks = [
    { url: "https://www.linkedin.com/in/arvindsingh-deora-043707223", icon: <FaLinkedin />, alt: "LinkedIn" },
    { url: "https://www.instagram.com/arvind_deora_12/", icon: <FaInstagram />, alt: "Instagram" },
    { url: "https://github.com/Arvindsingh-Deora", icon: <FaGithub />, alt: "GitHub" },
    { url: "https://linktr.ee/arvind_deora_12", icon: <FaLink />, alt: "Linktree" },
  ];

  const detailRefs = useRef([]);

  useEffect(() => {
    const elements = detailRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      elements.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="about-container">
      {/* Intro Paragraph */}
      <div className="intro-section">
        <h1>About Me</h1>
        <p>
          Coding is my passion—a canvas where logic meets creativity. I find joy in unraveling complex problems, crafting elegant solutions, and watching lines of code transform into functional, impactful applications. Whether it’s building dynamic web platforms with the MERN stack or diving into the thrill of competitive programming, I thrive on the challenge and the endless possibilities technology offers. For me, every project is a chance to learn, innovate, and leave a mark.
        </p>
      </div>

      {/* Education & Experience Section */}
      <div className="details-section">
        {/* Education (Left) */}
        <div className="education">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div
              key={index}
              className="detail-item"
              ref={(el) => (detailRefs.current[index] = el)}
            >
              <span className="tick">✔</span>
              <div className="content">
                <h3>{edu.institute}</h3>
                <p className="degree">{edu.degree}</p>
                {edu.duration && <p className="duration">{edu.duration}</p>}
                {edu.details && <p className="details">{edu.details}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="divider"></div>

        {/* Experience (Right) */}
        <div className="experience">
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="detail-item"
              ref={(el) => (detailRefs.current[index + education.length] = el)}
            >
              <span className="tick">✔</span>
              <div className="content">
                <h3>{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="duration">{exp.duration}</p>
                <p className="details">{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
    
    </div>
  );
};

export default About;