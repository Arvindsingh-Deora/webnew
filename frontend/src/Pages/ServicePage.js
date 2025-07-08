import React from 'react';
import '../Style/Pages/Service.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'; // 👈 Add this

const services = [
  {
    title: "Frontend Website",
    price: "₹10,000",
    features: [
      "Responsive Design",
      "Custom UI/UX",
      "React or HTML/CSS/JS",
      "Hosting Support",
    ],
  },
  {
    title: "Frontend + Backend",
    price: "₹20,000",
    features: [
      "Frontend Design",
      "Backend APIs with Node.js & MongoDB",
      "Authentication + Dashboard",
      "Deployment Support",
    ],
  },
  {
    title: "Frontend + Backend + SEO",
    price: "₹25,000",
    features: [
      "Everything in Full Stack",
      "SEO Optimization",
      "Google Index Setup",
      "Page Speed Boosting",
    ],
  },
];

const ServicePage = () => {
  const navigate = useNavigate(); // 👈 React Router navigation

  const handleChoosePlan = () => {
    navigate('/carrer'); // 👈 Redirect to /career
  };

  return (
    <div className="service-container">
      <Helmet>
        <title>Website Development Services by Arvind</title>
        <meta name="description" content="Get professional frontend, full stack, and SEO-optimized website packages by Arvind. Free AI Chatbot integration included!" />
      </Helmet>

      <h1>🚀 Website Development Services</h1>
      <p className="ai-badge">🤖 Free AI-Integrated Chatbot Included in All Plans</p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p className="price">{service.price}</p>
            <ul className="feature-list">
              {service.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <button className="choose-btn" onClick={handleChoosePlan}>Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
