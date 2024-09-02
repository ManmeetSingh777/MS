import React from 'react';
import './PanelOfDoctorsPage.css';

// Import the images for the collage
import photo1 from '../assets/Palak Kathuria.jpg';
import photo2 from '../assets/Sanjh Dubey.jpg';
import photo3 from '../assets/Gaganpreet Kaur.jpg';
import photo4 from '../assets/Ramya R.S.png';
import photo5 from '../assets/Neha.jpg';
import photo6 from '../assets/Tanya.jpg';
import photo7 from '../assets/Shreyansi.jpeg';
import photo8 from '../assets/Muskan.png';
import photo9 from '../assets/Smridhi.jpeg';
import photo10 from '../assets/Shalija Garh.png';
import photo11 from '../assets/Manan Oberoi.jpg';
import photo12 from '../assets/Arshiya Sharma.jpg';
import photo13 from '../assets/Divyangi Mittal.png';
import photo14 from '../assets/Gaurika_Arora.jpg';
import photo15 from '../assets/Ronika Sawhney.jpg';

const PanelOfDoctorsPage = () => {
  return (
    <div className="panel-doctors-container">
      <h1 className="panel-doctors-heading">Panel of Doctors and Therapists</h1>
      <div className="image-collage">
        <img src={img1} alt="Doctor 1" />
        <img src={img2} alt="Doctor 2" />
        <img src={img3} alt="Doctor 3" />
        <img src={img4} alt="Doctor 4" />
        <img src={img5} alt="Doctor 5" />
        <img src={img6} alt="Doctor 6" />
        <img src={img7} alt="Doctor 7" />
        <img src={img8} alt="Doctor 8" />
        <img src={img9} alt="Doctor 9" />
      </div>
      <div className="panel-content">
        <p>
          Our panel of doctors and therapists is composed of experienced professionals who specialize in various fields of mental health. Each member of our team is dedicated to providing compassionate and personalized care to help you achieve your wellness goals.
        </p>
        <p>
          We believe in a multidisciplinary approach, combining the expertise of clinical psychologists, psychiatrists, counselors, and therapists to ensure comprehensive mental health care. Whether you need support with anxiety, depression, trauma, or any other mental health issue, our panel is here to guide and support you every step of the way.
        </p>
        <p>
          Our therapists bring a wealth of experience in Cognitive Behavioral Therapy (CBT), Psychodynamic Therapy, Mindfulness-Based Therapy, and other therapeutic modalities. We are committed to creating a safe and supportive environment where you can explore your thoughts and feelings, work through challenges, and move towards a healthier and more fulfilling life.
        </p>
      </div>
    </div>
  );
};

export default PanelOfDoctorsPage;
