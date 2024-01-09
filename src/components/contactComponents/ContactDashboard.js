import React from 'react';
import '../../styles/Contact.css';

export default function ContactDashboard() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Work with Me</h1>
      <div className="contact-button">
        <a className="contact-link" href={`mailto:${'campbellhiatt@gmail.com'}?subject=${encodeURIComponent('Work with me')}}`}>
          Connect
        </a>
      </div>
    </div>
  );
}
