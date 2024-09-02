// BackgroundWithEmojis.jsx
import React from 'react';
import './BackgroundWithEmojis.css';

// Import images
import happy from '../assets/Happy.png';
import laugh from '../assets/laugh.png';
import heartEyes from '../assets/hug.png';
import cool from '../assets/rockbrows.png';
// Add other emojis as needed

const BackgroundWithEmojis = () => {
  return (
    <div className="background-container">
      <div className="emoji-container">
        <img src={happy} alt="Happy Emoji" className="emoji" />
        <img src={laugh} alt="Laughing Emoji" className="emoji" />
        <img src={heartEyes} alt="Heart Eyes Emoji" className="emoji" />
        <img src={cool} alt="Cool Emoji" className="emoji" />
        {/* Add more emojis as needed */}
      </div>
    </div>
  );
};

export default BackgroundWithEmojis;
