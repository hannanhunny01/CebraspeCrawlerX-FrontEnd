import React from 'react';
import './message.css';

function Message() {
  return (
    <div className="contact-messagecard-container">
      <div className="contact-messagecard-right">
        <div className="contact-messagecard-form">
          <h2>Entra em Contato</h2>
          <div className="contact-messagecard-input-group">
            <label>Name:</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="contact-messagecard-input-group">
            <label>Email:</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="contact-messagecard-input-group">
            <label>Message:</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button className="contact-messagecard-submit-button">
            Send Message
          </button>
        </div>
      </div>
  
    </div>
  );
}

export default Message;
