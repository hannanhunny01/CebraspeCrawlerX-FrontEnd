// ContactPage.js

import React from 'react';
import './contact.css'; // Import the CSS file for styling
import Navbar from '../../components/Navbar/navbar';
import Message from '../../components/contact/message/message';
import Information from '../../components/contact/information/information';

const ContactPage = () => {
  return (
    <div>
      <Navbar/>

   
      <div className='main-contact-container'>
           <div className='contact-container-information'>      <Information/></div>
        <div   className='contact-container-message'>  <Message/></div>
  
      
        </div>
    </div>
  );
};

export default ContactPage;
