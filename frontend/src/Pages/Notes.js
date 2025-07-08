import React from 'react';
import '../Style/Pages/Notes.css'; // create this file for custom styling
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Free DBMS, CN, OS, OOPS Notes by Arvind | Download PDFs</title>
  <meta name="description" content="Download Arvind's handwritten DBMS, Computer Network, Operating System, and OOPS notes in PDF format. Best notes for interviews, placements and exams." />
  <meta name="keywords" content="Arvind DBMS Notes, Computer Network Notes, OS Notes, OOPS Notes, Vapi Notes, Engineering Notes PDF" />
  <meta name="author" content="Arvind Deora" />
</Helmet>


const notesData = [
  { title: "DBMS Notes", file: "dbms-notes.pdf" },
  { title: "Operating System", file: "operating-system.pdf" },
  { title: "Computer Network", file: "computer-network.pdf" },
  { title: "OOPS Notes", file: "oops-notes.pdf" },
];


const Notes = () => {
  return (
    <div className="notes-container">
      <h1>📘 Download My Notes</h1>
      <div className="notes-grid">
        {notesData.map((note, index) => (
          <div className="note-card" key={index}>
            <h2>{note.title}</h2>
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

          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
