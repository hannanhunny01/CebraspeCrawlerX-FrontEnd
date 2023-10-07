import React from 'react';
import './information.css'
function Information() {
  return (
    <div className="contact-information-container">
      <div className="contact-information-title">
        Get in Contact with Us
      </div>
      <div className="contact-information-item">
        <i className="fa fa-envelope"></i> Email:{' '}
        <a href="mailto:your-email@gmail.com">your-email@gmail.com</a>
      </div>
      <div className="contact-information-item">
        <i className="fa fa-instagram"></i> Instagram:{' '}
        <a href="https://www.instagram.com/your-instagram-id" target="_blank" rel="noopener noreferrer">
          your-instagram-id
        </a>
      </div>
      <div className="contact-information-item">
        <i className="fa fa-whatsapp"></i> WhatsApp:{' '}
        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
          your-whatsapp-number
        </a>
      </div>
    </div>
  );
}

export default Information;
