// ContactPage.js

import React from 'react';
import './contact.css'; // Import the CSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-page-container">
  
      <div className="contact-right">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <div className="input-group">
            <label>Name:</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="input-group">
            <label>Message:</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button className="contact-submit-button">Send Message</button>
        </div>
      </div>
      <div className="contact-icons">
        <a href="https://www.instagram.com/your-instagram-profile">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:your-email@gmail.com">
          <i className="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
