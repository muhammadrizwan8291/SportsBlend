import React from 'react';
import './footer.css'; // You can create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the appropriate icons

function Footer() {
  return (
    <div className="footer">
      <h2 className="heading">Follow Us</h2>
      <p className="para">Always stay informed and connected to all our channels, support us and help us grow!</p>
      <ul className='icons'>
        <li><a href="https://web.facebook.com/profile.php?id=100031033301734/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="https://www.instagram.com/rizwanbhatti63/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="https://www.linkedin.com/in/muhammad-rizwan-5a4756234/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      </ul>
      <div className="footer-items">
        <div className="footer-row">
          <h3>Pages</h3>
          <p>Home</p>
        </div>
        <div className="footer-row">
          <h3>Account</h3>
          <p>Cart</p>
        </div>
        <div className="footer-row">
          <h3>Contacts</h3>
          <p>45678</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
