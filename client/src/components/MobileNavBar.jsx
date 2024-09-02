import React, { useState } from 'react';
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaQuestionCircle,
  FaUsers,
  FaHeart,
  FaSignInAlt,
  FaTimes,
  FaCalendarAlt,
  FaTools,
  FaSignOutAlt
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import logo from '../assets/TherapyLogo01.png'; 
import './MobileNavBar.css';
import { useAuth } from '../context/AuthContext'; // Import useAuth from context

const ICON_SIZE = 20;

function MobileNavbar() {
  const [navVisible, setNavVisible] = useState(false);
  const { user, logout } = useAuth(); // Destructure user and logout from useAuth
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setNavVisible(!navVisible);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={toggleNavbar}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={`navbar ${navVisible ? 'navbar-visible' : ''}`}>
        <button
          type="button"
          className="nav-btn"
          onClick={toggleNavbar}
        >
          {!navVisible ? <FaBars size={30} /> : <FaTimes size={30} />}
        </button>
        <div>
          <NavLink className="logo" to="/">
            <img src={logo} alt="logo" />
          </NavLink>

          {user ? (
            <div className="profile-container">
              <li className="profile" onClick={toggleDropdown}>
                <img src={user.photoURL} alt="Profile" className="profile-icon" />
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <button onClick={logout}>
                      <FaSignOutAlt size={ICON_SIZE} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </li>
            </div>
          ) : (
            <NavLink to="/login" className="nav-link login-link">
              <FaSignInAlt size={ICON_SIZE} />
              <span>Login</span>
            </NavLink>
          )}

          <div className="links nav-top">
            <NavLink to="/" className="nav-link">
              <FaHome size={ICON_SIZE} />
              <span>Home</span>
            </NavLink>
            <NavLink to="/specializations" className="nav-link">
              <FaUsers size={ICON_SIZE} />
              <span>Specializations</span>
            </NavLink>
            <NavLink to="/services" className="nav-link">
              <FaTools size={ICON_SIZE} />
              <span>Services</span>
            </NavLink>
            <NavLink to="/events" className="nav-link">
              <FaCalendarAlt size={ICON_SIZE} />
              <span>Events</span>
            </NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink to="/about-us" className="nav-link">
            <FaInfoCircle size={ICON_SIZE} />
            <span>About Us</span>
          </NavLink>
          <NavLink to="/faqs" className="nav-link">
            <FaQuestionCircle size={ICON_SIZE} />
            <span>FAQs</span>
          </NavLink>
          <NavLink to="/hoc" className="nav-link">
            <FaUsers size={ICON_SIZE} />
            <span>HOC</span>
          </NavLink>
          <NavLink to="/zehen" className="nav-link">
            <FaHeart size={ICON_SIZE} />
            <span>ZEHEN</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default MobileNavbar;
