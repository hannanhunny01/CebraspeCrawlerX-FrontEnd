import './message.css'
function Message() {
    return (
      <div className="contact-messagecard-container">
        <div className="contact-messagecard-right">
          <div className="contact-messagecard-form">
            <h2>Send Us a Message</h2>
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
        <div className="contact-messagecard-icons">
          <a href="https://www.instagram.com/your-instagram-profile">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:your-email@gmail.com">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
    );
  }
  
  export default Message;
  