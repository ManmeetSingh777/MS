import React from 'react';
import './AboutUsPage.css';
import bgImage from '../assets/AboutUsBG.webp'; // Ensure this is the correct path to your image
import { useNavigate } from 'react-router-dom';



const AboutUs = () => {

  const navigate = useNavigate();

  const handleOpenPage = (path) => {
    // window.location.href = path;
    navigate(path);
  };

  return (
    <div className="about-us-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className="about-us-heading-left">About</h1>
      <h1 className="about-us-heading-right">Us</h1>
      <div className="boxes">
        <div className="box" onClick={() => handleOpenPage('/overall-information')}>
          <div className="box-text">Haus Of Calm</div>
        </div>
        <div className="box" onClick={() => handleOpenPage('/founder')}>
          <div className="box-text">Founder</div>
        </div>
        <div className="box" onClick={() => handleOpenPage('/panel-of-doctors-and-therapists')}>
          <div className="box-text">Panel of Doctors and Therapists</div>
        </div>
        <div className="box" onClick={() => handleOpenPage('/board-of-advisors')}>
          <div className="box-text">Board of Advisors</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
