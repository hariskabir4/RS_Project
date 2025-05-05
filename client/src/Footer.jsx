import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer_Footer">
      <ul className="Footer_Footer_List">
        <li className="Footer_Footer_Item">© 2025 FootCare. All rights reserved.</li>
        <li className="Footer_Footer_Item"><a href="/privacy-policy" className="Footer_Footer_Link">Privacy Policy</a></li>
        <li className="Footer_Footer_Item"><a href="/terms-of-service" className="Footer_Footer_Link">Terms of Service</a></li>
        <li className="Footer_Footer_Item"><a href="/contact" className="Footer_Footer_Link">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
