import React, { useState } from "react";
import '../Style/Pages/Carrer.css'; // Fixed typo
import qrCodeImage from '../assets/qrCodeImage.jpg';

const Career = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    remarks: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitMessage("Inquiry submitted successfully!");
        setFormData({ name: "", email: "", subject: "", remarks: "" });
      } else {
        setSubmitMessage("Failed to submit inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("An error occurred. Please try again later.");
    }
  
    setTimeout(() => setSubmitMessage(""), 3000);
  };

  const services = [
    {
      title: "One Meeting",
      price: "Rs 100",
      description: "A one-on-one consultation to discuss your ideas or projects.",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    },
    {
      title: "Frontend Work",
      price: "Rs 10000",
      description: "Custom frontend development with modern frameworks like React.",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    },
    {
      title: "Full Stack Work",
      price: "Rs 20000",
      description: "End-to-end development with MERN stack for scalable solutions.",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    },
  ];

  return (
    <div className="career-container">
      <h1>Career & Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" onClick={() => openModal(service)}>
            <img src={service.thumbnail} alt={`${service.title} Thumbnail`} className="service-thumbnail" />
            <div className="service-info">
              <h2>{service.title}</h2>
              <p className="price">{service.price}</p>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => handleTabChange("personal")}
        >
          Personal Inquiry
        </button>
        <button
          className={`tab-button ${activeTab === "professional" ? "active" : ""}`}
          onClick={() => handleTabChange("professional")}
        >
          Professional Inquiry
        </button>
      </div>

      <div className="form-container">
        {activeTab === "personal" && (
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <h2>Personal Inquiry</h2>
            <div className="form-group">
              <label htmlFor="personal-name">Name</label>
              <input
                type="text"
                id="personal-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="personal-email">Email ID</label>
              <input
                type="email"
                id="personal-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="personal-subject">Subject</label>
              <input
                type="text"
                id="personal-subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="personal-remarks">Remarks</label>
              <textarea
                id="personal-remarks"
                name="remarks"
                value={formData.remarks}
                onChange={handleInputChange}
                placeholder="Your Remarks"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        )}

        {activeTab === "professional" && (
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <h2>Professional Inquiry</h2>
            <div className="form-group">
              <label htmlFor="professional-name">Name</label>
              <input
                type="text"
                id="professional-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="professional-email">Email ID</label>
              <input
                type="email"
                id="professional-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="professional-subject">Subject</label>
              <input
                type="text"
                id="professional-subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="professional-remarks">Remarks</label>
              <textarea
                id="professional-remarks"
                name="remarks"
                value={formData.remarks}
                onChange={handleInputChange}
                placeholder="Your Remarks"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        )}
      </div>

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