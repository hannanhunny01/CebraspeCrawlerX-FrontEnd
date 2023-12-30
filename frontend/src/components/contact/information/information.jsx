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
            href="https://www.instagram.com/cebraspecrawlerx"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cebraspecrawlerx
          </a>
        </div>
        <div className="contact-information-item">
          <i className="fa fa-whatsapp"></i>
          <a
            href="https://wa.me/61998595632"
            target="_blank"
            rel="noopener noreferrer"
          >
61 99859-5632       </a>
        </div>
      </div>
    </div>
  );
}

export default Information;
