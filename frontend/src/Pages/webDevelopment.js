import React from 'react';
import '../Style/Pages/webDevelopment.css';
import { Helmet } from 'react-helmet';


const roadmap = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "GitHub",
  "Deployment"
];

const webDevNotes = [
  
  { title: "HTML Notes", file: "html-cheatsheet.pdf" },
  { title: "CSS Notes", file: "css-notes.pdf" },
   { title: "JavaScript Notes", file: "javascript-notes.pdf" },
   { title: "React Basics", file: "react-basics.pdf" },
   
     { title: "File Structure Notes", file: "fileStructure-notes.pdf" },
      { title: "Backend Notes", file: "backend-notes.pdf" },
       { title: "SQL Notes", file: "SQL-notes.pdf" },
       { title: "Github Notes", file: "github-notes.pdf" },
        { title: "Deployment Notes", file: "Deployment-notes.pdf" },
  // Add more...
];

const WebDevelopment = () => {
  return (
    <div className="webdev-container">
      <Helmet>
        <title>Web Development Roadmap | MERN Stack Notes</title>
        <meta name="description" content="Explore Arvind's complete roadmap to becoming a MERN Stack Developer with downloadable notes." />
      </Helmet>

      <h1>🚂 Welcome to MERN Stack Development</h1>
      <div className="roadmap">
        {roadmap.map((topic, index) => (
          <div className="roadmap-step" key={index}>
            <span>{topic}</span>
            {index < roadmap.length - 1 && <div className="arrow">➡️</div>}
          </div>
        ))}
      </div>

      <h2>📘 Web Development Notes</h2>
      <div className="notes-grid">
        {webDevNotes.map((note, index) => (
          <div className="note-card" key={index}>
            <h3>{note.title}</h3>
            <div className="button-group">
              <a href={`/Notes/${note.file}`} download>
                <button className="download-btn">⬇️ Download</button>
              </a>
              <a href={`/Notes/${note.file}`} target="_blank" rel="noreferrer">
                <button className="read-btn">📖 Read</button>
              </a>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  );
};

export default WebDevelopment;
