import React, { useState } from 'react';
import './FeedBackTree.css';
import treeImage from '../assets/FTree.png'; // Update the path to your tree image
import centralPersonImage from '../assets/CentralPerson.jpg'; // Central image
import person1 from '../assets/person1.jpg'; // Smaller images
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import person5 from '../assets/person5.jpg';
import person6 from '../assets/person6.jpg';
import person7 from '../assets/person7.jpg';
import person8 from '../assets/person8.jpg';
import person9 from '../assets/person9.jpg';
import person10 from '../assets/person10.jpg';

// Feedback data
const feedbacks = {
  central: "Dr. Moumita Nandy has been a beacon of hope during my toughest times. Her approach is both empathetic and insightful.",
  person1: "Dr. Nandy's sessions have transformed my life. I feel empowered and more in control of my emotions.",
  person2: "I was skeptical at first, but Dr. Nandy's techniques have truly helped me overcome my anxiety.",
  person3: "Thanks to Dr. Nandy, I’ve gained a new perspective on my life and relationships.",
  person4: "Her guidance has been invaluable. I’m much more confident and happy now.",
  person5: "The support I received from Dr. Nandy has been nothing short of life-changing.",
  person6: "Her understanding and tailored techniques have made a significant difference in my mental well-being.",
  person7: "Dr. Nandy’s approach is both professional and compassionate. I’m grateful for her support.",
  person8: "My sessions with Dr. Nandy have improved my mental health significantly. I couldn’t recommend her enough.",
  person9: "Dr. Nandy’s counseling has been incredibly insightful. I now feel more equipped to handle life’s challenges.",
  person10: "Her sessions are not just therapeutic but also enlightening. I’m grateful for the positive impact she’s had on my life.",
};

const FeedbackTree = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(feedbacks.central);

  const handleImageClick = (feedbackKey) => {
    setSelectedFeedback(feedbacks[feedbackKey]);
  };

  return (
    <div className="feedback-tree-section">
      <div className="tree-container">
        <img src={treeImage} alt="Feedback Tree" className="tree-image" />

        {/* Central larger circle */}
        <div className="circle central-circle">
          <img src={centralPersonImage} alt="Central Person" />
        </div>

        {/* Smaller circles */}
        <div className="circle small-circle circle1" onClick={() => handleImageClick('person1')}>
          <img src={person1} alt="Person 1" />
        </div>
        <div className="circle small-circle circle2" onClick={() => handleImageClick('person2')}>
          <img src={person2} alt="Person 2" />
        </div>
        <div className="circle small-circle circle3" onClick={() => handleImageClick('person3')}>
          <img src={person3} alt="Person 3" />
        </div>
        <div className="circle small-circle circle4" onClick={() => handleImageClick('person4')}>
          <img src={person4} alt="Person 4" />
        </div>
        <div className="circle small-circle circle5" onClick={() => handleImageClick('person5')}>
          <img src={person5} alt="Person 5" />
        </div>
        <div className="circle small-circle circle6" onClick={() => handleImageClick('person6')}>
          <img src={person6} alt="Person 6" />
        </div>
        <div className="circle small-circle circle7" onClick={() => handleImageClick('person7')}>
          <img src={person7} alt="Person 7" />
        </div>
        <div className="circle small-circle circle8" onClick={() => handleImageClick('person8')}>
          <img src={person8} alt="Person 8" />
        </div>
        <div className="circle small-circle circle9" onClick={() => handleImageClick('person9')}>
          <img src={person9} alt="Person 9" />
        </div>
        <div className="circle small-circle circle10" onClick={() => handleImageClick('person10')}>
          <img src={person10} alt="Person 10" />
        </div>
      </div>

      <div className="feedback-display">
        <h2>People who believed in Us</h2>
        <p>{selectedFeedback}</p>
      </div>
    </div>
  );
};

export default FeedbackTree;
