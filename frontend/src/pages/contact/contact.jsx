// ContactPage.js

import React from 'react';
import './contact.css';
import Navbar from '../../components/Navbar/navbar';
import Message from '../../components/contact/message/message';
import Information from '../../components/contact/information/information';

const ContactPage = () => {
  const navbarHeight = 64; // Replace with the actual height of your Navbar component
  const mainContactContainerHeight = `calc(100vh - ${navbarHeight}px)`;

  return (
    <div>
      <Navbar/>

      <div style={{display:"flex",justifyContent:"center" ,alignItems: "center",}}>  
        <div className='main-contact-container' style={{margin: "auto", height: mainContactContainerHeight}}>
          <div className='contact-container-information'>
            <Information/>
          </div>
          <div className='contact-container-message'>
            <Message/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
