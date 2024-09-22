import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Our mission is to provide high-quality service and products. We strive to exceed customer expectations and continuously improve our platform.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="#"><FaFacebookSquare/></a></li>
            <li><a href="#"><FaTwitter/></a></li>
            <li><a href="#"><FaLinkedinIn/></a></li>
            <li><a href="#"><FaInstagram/></a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
