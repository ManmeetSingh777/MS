import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MagicNavbar.css';
import { IonIcon } from '@ionic/react';
import { home, build, informationCircle, logIn, helpCircle, people, body, business, calendar } from 'ionicons/icons'; // Import calendar icon for Events
import { useAuth } from '../context/AuthContext';
import logo from '../assets/The Logo.png';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const markerRef = useRef(null);
  const listRef = useRef([]);
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const marker = markerRef.current;
    const activeItem = listRef.current[activeIndex];
    if (marker && activeItem) {
      marker.style.left = `${activeItem.offsetLeft}px`;
      marker.style.width = `${activeItem.offsetWidth}px`;
    }
  }, [activeIndex]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="menu-items">
        {[
          { icon: home, text: 'Home', link: '/' },
          { icon: people, text: 'Specializations', link: '/specializations' },
          { icon: build, text: 'Services', link: '/services' },
          { icon: calendar, text: 'Events', link: '/events' }, // Replaced Contact Us with Events
          { icon: informationCircle, text: 'About Us', link: '/about-us' },
          { icon: helpCircle, text: 'FAQs', link: '/faqs' },
          { icon: body, text: 'HOC', link: '/hoc' },
          { icon: business, text: 'ZEHEN', link: '/zehen' },
        ].map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onMouseEnter={() => handleItemClick(index)}
            ref={(el) => (listRef.current[index] = el)}
          >
            <Link to={item.link}>
              <IonIcon icon={item.icon} />
              <span className="nav-text">{item.text}</span>
            </Link>
          </li>
        ))}
        <div id="marker" ref={markerRef}><span></span></div>
      </ul>
      <ul className="login-item">
        {user ? (
          <li className="profile" onClick={toggleDropdown}>
            <img src={user.photoURL} alt="Profile" className="profile-icon" />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </li>
        ) : (
          <li
            className={activeIndex === 7 ? 'active' : ''}
            onMouseEnter={() => handleItemClick(7)}
            ref={(el) => (listRef.current[7] = el)}
          >
            <Link to="/login">
              <IonIcon icon={logIn} />
              <span className="nav-text">Login</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
