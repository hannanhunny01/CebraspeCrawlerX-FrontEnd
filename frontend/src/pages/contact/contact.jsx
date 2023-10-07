import React from 'react';
import './contact.css';
import Navbar from '../../components/Navbar/navbar';
import Message from '../../components/contact/message/message';
import Information from '../../components/contact/information/information';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className='centered-container-wrapper'>
      <div className='centered-container'>
        <div className='main-contact-container'>
          <div className='contact-container-information'>
            <Information />
          </div>
          <div className='contact-container-message'>
            <Message />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
