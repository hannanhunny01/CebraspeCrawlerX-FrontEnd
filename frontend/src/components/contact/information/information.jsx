import React from 'react';
import './information.css';

function Information() {
  return (
    <div className="contact-information-container">
      <div className="contact-information-title">NOSSOS CONTATOS</div>
      <div className="contact-information-items">
        <div className="contact-information-item">
          <i className="fa fa-envelope"></i>
          <a href="mailto:hannanhoney5000@gmail.com">hannanhoney5000@gmail.com</a>
        </div>
        <div className="contact-information-item">
          <i className="fa fa-instagram"></i>
          <a
            href="https://www.instagram.com/hannanhunny01"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hannanhunny01
          </a>
        </div>
        <div className="contact-information-item">
          <i className="fa fa-whatsapp"></i>
          <a
            href="https://wa.me/7878787878"
            target="_blank"
            rel="noopener noreferrer"
          >
            your-whatsapp-number
          </a>
        </div>
      </div>
    </div>
  );
}

export default Information;
