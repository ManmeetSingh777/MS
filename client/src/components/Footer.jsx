import React from "react";
import './Footer.css';
import facebookIcon from '../assets/facebook.png'; // Update with your actual path
import instagramIcon from '../assets/insta.png'; // Update with your actual path
import linkedinIcon from '../assets/Linkedin.png'; // Update with your actual path
import twitterIcon from '../assets/twitter.png'; // Update with your actual path
import youtubeIcon from '../assets/yt.png'; // Update with your actual path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="subscribe-title">Stay Updated</h3>
        <p className="subscribe-text">Subscribe to our newsletter to get the latest updates directly to your inbox.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-column">
          <h3>More</h3>
          <ul>
            <li><a href="#">Send a gift</a></li>
            <li><a href="#">Explore Our Blog</a></li>
            <li><a href="#">Subscribe</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">About MindStudio</a></li>
            <li><a href="#">Leadership</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Mental health resources</a></li>
            <li><a href="#">Accessibility Statement</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Cookie policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get the app</h3>
          <div className="app-links">
            <a href="#"><img src="path/to/app-store.png" alt="Download on the App Store" /></a>
            <a href="#"><img src="path/to/google-play.png" alt="Get it on Google Play" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 MindStudio Inc.</p>
        <ul className="footer-links">
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
        <div className="social-links">
          <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
          <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
        </div>
        <div className="language-select">
          <select>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
