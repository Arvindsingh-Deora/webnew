import React, { useState } from "react";
import '../Style/Pages/Carrer.css'; 
import qrCodeImage from '../assets/qrCodeImage.jpg';

const Career = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    remarks: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

 

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = activeTab === "personal" ? "/api/personal-inquiry" : "/api/professional-inquiry";
  
    try {
      const response = await fetch(`https://portfolio-afbq.onrender.com${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      console.log("Active Tab:", activeTab);
      console.log("Response Status:", response.status);
  
      if (response.ok) {
        console.log("Form submitted successfully");
        setShowSuccessPopup(false); // Ensure it's hidden before showing again
        setTimeout(() => {
          setShowSuccessPopup(true);
        }, 10);
        setFormData({ name: "", email: "", subject: "", remarks: "" });
  
        // Hide the success popup after 3 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
      } else {
        alert("Failed to submit inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className="career-container">
      <h1>Career & Services</h1>

      <div className="tabs">
        <button className={`tab-button ${activeTab === "personal" ? "active" : ""}`} onClick={() => handleTabChange("personal")}>
          Personal Inquiry
        </button>
        <button className={`tab-button ${activeTab === "professional" ? "active" : ""}`} onClick={() => handleTabChange("professional")}>
          Professional Inquiry
        </button>
      </div>

      <div className="form-container">
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <h2>{activeTab === "personal" ? "Personal Inquiry" : "Professional Inquiry"}</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label>Remarks</label>
            <textarea name="remarks" value={formData.remarks} onChange={handleInputChange} placeholder="Your Remarks" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {showSuccessPopup && (
        <div className="success-popup">
          <div className="success-content">
            <h2>✅ Success!</h2>
            <p>Your inquiry has been submitted successfully.</p>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedService?.title}</h2>
            <p className="modal-price">{selectedService?.price}</p>
            <img src={qrCodeImage} alt="Payment QR Code" className="qr-code" />
            <p>Scan to pay via your preferred UPI app</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
