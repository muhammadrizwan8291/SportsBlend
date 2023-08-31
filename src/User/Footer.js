import React from 'react';

function Footer()  {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>We are a company dedicated to...</p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <p>Follow us on...</p>
        </div>
      </div>
      <div className="footer-row">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
