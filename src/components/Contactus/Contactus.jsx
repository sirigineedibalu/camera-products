import React, { useState } from "react";
import "./Contactus.css"; // Import the CSS file

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  const MapStyle = {
    width: "100%",
    height: 400,
  };

  return (
    <div>
      <div className="contact-us-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contact Us</h2>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="contact-label" htmlFor="email">
            Email:
          </label>
          <input
            className="contactus-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>

          <button className="contact-button" type="submit">
            Submit
          </button>
        </form>
        <div className="Contact-us-maps-location">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7-1-621/259,%206th%20Floor,%20Sahithi%20Arcade,%20Beside%20S.R.Nagar%20Traffic%20Police%20Station,%20Hyderabad-%20500038+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width={MapStyle.width}
            height={MapStyle.height}
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Brihaspathi Technologies Pvt Ltd"
          />
        </div>
      </div>
    </div>
  );
};
