import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { menu, close, home, albums, call, informationCircle, helpCircle, people, hand, logIn } from 'ionicons/icons';
import './MobileSidebar.css';
import logo from '../assets/TherapyLogo01.png'; // Add your logo here

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="mobile-header">
        <img src={logo} alt="Logo" className="logo" />
        <IonIcon icon={isOpen ? close : menu} onClick={toggleSidebar} className="menu-icon" />
      </div>
      <div className="sidebar-content">
        <ul>
          {[
            { icon: home, text: 'Home', link: '/' },
            { icon: albums, text: 'Specializations', link: '/specializations' },
            { icon: call, text: 'Contact Us', link: '/contact-us' },
            { icon: informationCircle, text: 'About Us', link: '/about-us' },
            { icon: helpCircle, text: 'FAQs', link: '/faqs' },
            { icon: people, text: 'HOC', link: '/hoc' },
            { icon: hand, text: 'NGO', link: '/ngo' }
          ].map((item, index) => (
            <li key={index} onClick={toggleSidebar}>
              <Link to={item.link}>
                <IonIcon icon={item.icon} />
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link to="/login">
              <IonIcon icon={logIn} />
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
