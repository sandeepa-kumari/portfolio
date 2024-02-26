

import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import './style/Contact.css';
import './style/Button.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        {/* <h2>Contact Information</h2> */}
        <button className="moving-button"><h3>Contact</h3></button><br /> <br />
        <div className="contact-item">
          <FaPhoneSquareAlt className="contact-icon" />
          <span className="contact-text">Call me: 7030365883 </span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">Email me: sandeepakumaridev@gmail.com </span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <span className="contact-text">LinkedIn: <a href="https://www.linkedin.com/in/sandeepa-kumari-93719a7b/" target="_blank">Sandeepa_Kumari</a></span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

