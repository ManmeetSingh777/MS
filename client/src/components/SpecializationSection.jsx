import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SpecializationSection.css';
import { useNavigate } from 'react-router-dom';

// Importing images
import photo1 from '../assets/Palak Kathuria.jpg';
import photo2 from '../assets/Sanjh Dubey.jpg';
import photo3 from '../assets/Gaganpreet Kaur.jpg';
import photo4 from '../assets/Ramya R.S.png';
import photo5 from '../assets/Neha.jpg';
import photo6 from '../assets/Tanya.jpg';
import photo7 from '../assets/Shreyansi.jpeg';
import photo8 from '../assets/Muskan.png';
import photo9 from '../assets/Smridhi.jpeg';

// Real therapists data array
const therapists = [
  {
    id: '66d472f59aea15993a72e894', // Replace with the correct MongoDB ID
    name: 'Palak Kathuria',
    photo: photo1,
    specialization: 'Forensic and Counselling Psychologist',
    description: 'Specializes in personality profiling, investigation, and working with sensitive populations.',
  },
  {
    id: '66d472f59aea15993a72e895', // Replace with the correct MongoDB ID
    name: 'Sanjh Dubey',
    photo: photo2,
    specialization: 'Counselling Psychologist',
    description: 'Experienced in Cognitive-Behavioral Therapy, Psychodynamic Therapy, and Mindfulness-Based Interventions.',
  },
  {
    id: '66d472f59aea15993a72e896', // Replace with the correct MongoDB ID
    name: 'Gaganpreet Kaur',
    photo: photo3,
    specialization: 'Psychotherapist',
    description: 'Focuses on using art as a medium of catharsis and self-exploration.',
  },
  {
    id: '66d472f59aea15993a72e897', // Replace with the correct MongoDB ID
    name: 'Ramya R.S',
    photo: photo4,
    specialization: 'Eclectic Psychologist',
    description: 'Integrates creative modalities into therapy, specializing in expressive arts therapy.',
  },
  {
    id: '66d472f59aea15993a72e898', // Replace with the correct MongoDB ID
    name: 'Neha',
    photo: photo5,
    specialization: 'Counselling Psychologist',
    description: 'Aims to empower individuals and help them cultivate resilience and growth.',
  },
  {
    id: '66d472f59aea15993a72e899', // Replace with the correct MongoDB ID
    name: 'Tanya Rajwanshi',
    photo: photo6,
    specialization: 'Counselling Psychologist',
    description: 'Certified Expressive Art Therapist and POSH Trainer.',
  },
  {
    id: '66d472f59aea15993a72e89a', // Replace with the correct MongoDB ID
    name: 'Shreyansi Sahai',
    photo: photo7,
    specialization: 'Art Therapist',
    description: 'Expert in integrating creative arts into therapeutic practices.',
  },
  {
    id: '66d472f59aea15993a72e89b', // Replace with the correct MongoDB ID
    name: 'Muskan Aggarwal',
    photo: photo8,
    specialization: 'Counselling Psychologist and Career Coach',
    description: 'Specializes in holistic, client-centered, and empathetic counseling.',
  },
  {
    id: '66d472f59aea15993a72e89c', // Replace with the correct MongoDB ID
    name: 'Smridhi Mehindru',
    photo: photo9,
    specialization: 'Counseling Psychologist and Certified Clinical Hypnotherapist',
    description: 'Specializes in anxiety, stress management, and sexual health.',
  },
];

const SpecializationSection = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleSeeAllSpecializations = () => {
    navigate('/specializations'); // Redirect to Specializations page
  };

  return (
    <div className="specialization-section">
      <p className='section-heading'>Some experts who can actually help</p>
      <Slider {...settings}>
        {therapists.map((therapist, index) => (
          <div key={index} className="therapist-card">
            <img src={therapist.photo} alt={therapist.name} />
            <h3>{therapist.name}</h3>
            <p>{therapist.specialization}</p>
            <p>{therapist.description}</p>
          </div>
        ))}
      </Slider>
      <div className="see-all">
        <button className="see-all-button" onClick={handleSeeAllSpecializations}>See All</button>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#007BFF' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#007BFF' }}
      onClick={onClick}
    />
  );
};

export default SpecializationSection;
