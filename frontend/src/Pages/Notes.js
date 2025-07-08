import React from 'react';
import '../Style/Pages/Notes.css'; // create this file for custom styling

const notesData = [
  { title: "DBMS Notes", file: "Arvind DBMS Notes.pdf" },
  { title: "Operating System", file: "Arvind Operating system.pdf" },
  { title: "Computer Network", file: "Computer Network.pdf" },
  { title: "OOPS Notes", file: "OOPS notes.pdf" },
];

const Notes = () => {
  return (
    <div className="notes-container">
      <h1>📘 Download My Notes</h1>
      <div className="notes-grid">
        {notesData.map((note, index) => (
          <div className="note-card" key={index}>
            <h2>{note.title}</h2>
            <a href={`/Notes/${note.file}`} download>
              <button className="download-btn">⬇️ Download PDF</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
