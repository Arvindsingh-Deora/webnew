import React, { useState } from 'react';
import '../Style/Pages/Notes.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';





const Notes = () => {
  const [activeSection, setActiveSection] = useState(null); // 'core', 'dsa', 'web'
const navigate = useNavigate();
  const coreSubjects = [
    { title: "DBMS Notes", file: "dbms-notes.pdf" },
    { title: "Operating System", file: "operating-system.pdf" },
    { title: "Computer Network", file: "computer-network.pdf" },
    { title: "OOPS Notes", file: "oops-notes.pdf" },
    { title: "System Design Notes", file: "System Design.pdf" },
    
  ];

  const dsaNotes = [
    // { title: "Striver SDE Sheet - Arrays", file: "sde-arrays.pdf" },
  ];

  const webDevNotes = [
    // { title: "React Basics", file: "react-basics.pdf" },
  ];

  const renderNotes = (notesArray) => (
    <div className="notes-grid">
      {notesArray.map((note, index) => (
        <div className="note-card" key={index}>
          <h2>{note.title}</h2>
          <div className="button-group">
            <a
              href={`/Notes/${note.file}`}
              download
              onClick={() =>
                window.gtag && window.gtag('event', 'download', {
                  event_category: 'PDF',
                  event_label: note.title,
                })
              }
            >
              <button className="download-btn">⬇️ Download PDF</button>
            </a>

            <a
              href={`/Notes/${note.file}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                window.gtag && window.gtag('event', 'read_online', {
                  event_category: 'PDF',
                  event_label: note.title,
                })
              }
            >
              <button className="read-btn">📖 Read Online</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="notes-container">
      <Helmet>
        <title>Free DBMS, CN, OS, OOPS Notes by Arvind | Download PDFs</title>
        <meta
          name="description"
          content="Download Arvind's handwritten DBMS, Computer Network, Operating System, and OOPS notes in PDF format. Best notes for interviews, placements and exams."
        />
        <meta
          name="keywords"
          content="Arvind DBMS Notes, Computer Network Notes, OS Notes, OOPS Notes, Vapi Notes, Engineering Notes PDF"
        />
        <meta name="author" content="Arvind Deora" />
      </Helmet>

      <h1>📘 Download My Notes</h1>
      <p className="upload-timing">📅 Everyday Notes Will Be Uploaded at <strong>8 AM</strong></p>

      {/* Clickable Categories */}
      <div className="category-boxes">
        <div className="category-card" onClick={() => setActiveSection('core')}>
          🎓 Core Subjects
        </div>
        <div className="category-card" onClick={() => setActiveSection('dsa')}>
          📚 DSA
        </div>
        <div className="category-card" onClick={() =>navigate('/web-development')
}>
          💻 Web Development
           </div>
      </div>

      {/* Show selected notes section */}
      {activeSection === 'core' && (
        <section className="notes-section">
          <h2>🎓 Core Subjects</h2>
          {renderNotes(coreSubjects)}
        </section>
      )}

      {activeSection === 'dsa' && (
        <section className="notes-section">
          <h2>📚 DSA Notes</h2>
          {renderNotes(dsaNotes)}
        </section>
      )}

      {activeSection === 'web' && (
        <section className="notes-section">
          <h2>💻 Web Development Notes</h2>
          {renderNotes(webDevNotes)}
        </section>
      )}
    </div>
  );
};

export default Notes;
