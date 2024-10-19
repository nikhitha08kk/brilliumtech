import React from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='no'>
        <FontAwesomeIcon icon={faPhone} /> +123 456 7890 {/* Phone number here */}
      </div>
      <div className='mail'>
        <FontAwesomeIcon icon={faEnvelope} /> example@mail.com {/* Email here */}
      </div>
      <div className='time'>
        <FontAwesomeIcon icon={faClock} /> Mon-Fri: 9AM - 6PM {/* Working hours here */}
      </div>
    </div>
  );
}

export default Contact;
