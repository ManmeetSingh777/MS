import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUsMobile.css';
import bgImageMobile from '../assets/AboutUsBGM.webp'; // Correct mobile background

// Import images for the cards
import overallInfoImage from '../assets/HausOfCalm.webp';
import founderImage from '../assets/Founders.webp';
import doctorsImage from '../assets/PanelOfDoctors.webp';
import advisorsImage from '../assets/Board.webp';

const AboutUsMobile = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="about-us-container-mobile" style={{ backgroundImage: `url(${bgImageMobile})` }}>
      <h1 className="about-us-heading-mobile">About Us</h1>
      <div className="boxes-mobile">
        <div className="box-mobile" onClick={() => handleCardClick('/overall-information')}>
          <div className="box-content-mobile">
            <img src={overallInfoImage} alt="Overall Information" className="box-image-mobile" />
            <div className="box-text-mobile">Haus Of Calm</div>
          </div>
        </div>
        <div className="box-mobile" onClick={() => handleCardClick('/founder')}>
          <div className="box-content-mobile">
            <img src={founderImage} alt="Founder" className="box-image-mobile" />
            <div className="box-text-mobile">Founder</div>
          </div>
        </div>
        <div className="box-mobile" onClick={() => handleCardClick('/panel-of-doctors-and-therapists')}>
          <div className="box-content-mobile">
            <img src={doctorsImage} alt="Panel of Doctors and Therapists" className="box-image-mobile" />
            <div className="box-text-mobile">Panel of Doctors and Therapists</div>
          </div>
        </div>
        <div className="box-mobile" onClick={() => handleCardClick('/board-of-advisors')}>
          <div className="box-content-mobile">
            <img src={advisorsImage} alt="Board of Advisors" className="box-image-mobile" />
            <div className="box-text-mobile">Board of Advisors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMobile;
