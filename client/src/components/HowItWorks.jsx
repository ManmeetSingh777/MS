import React from 'react';
import './HowItWorks.css';
import step1Image from '../assets/choose.webp'; // Replace with your actual image paths
import step2Image from '../assets/Book.webp';
import step3Image from '../assets/SHOWUP.webp';

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <h2>How it works?</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-heading">Step 1</div>
          <div className="tagline">CHOOSE A THERAPIST</div>
          <div className="step-box">
            <img src={step1Image} alt="Step 1" />
          </div>
          <div className="step-name">Choosing</div>
        </div>
        <div className="step">
          <div className="step-heading">Step 2</div>
          <div className="tagline">BOOK A MEETING</div>
          <div className="step-box">
            <img src={step2Image} alt="Step 2" />
          </div>
          <div className="step-name">Booking</div>
        </div>
        <div className="step">
          <div className="step-heading">Step 3</div>
          <div className="tagline">SHOW UP AT THE DESIGNATED TIME</div>
          <div className="step-box">
            <img src={step3Image} alt="Step 3" />
          </div>
          <div className="step-name">Arrival</div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
