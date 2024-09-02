import React, { useState } from 'react';
import './ServicesPage.css';

// Importing images for therapies
import image1 from '../assets/O3.webp';
import image2 from '../assets/cc.webp';
import image3 from '../assets/fc.webp';
import image4 from '../assets/gc.webp';
import image5 from '../assets/careerc.webp';
import image6 from '../assets/sa.webp';
import image7 from '../assets/mc.webp';
import image8 from '../assets/TRAUMA THERAPY.png';
import image9 from '../assets/st.webp';
import image10 from '../assets/Rehabilitation.webp';
import image11 from '../assets/LGBTQIA+.webp';
import image12 from '../assets/hc.webp';
import image13 from '../assets/PsychoEd.webp';
import image14 from '../assets/oncology.webp';
import image15 from '../assets/online sessions.webp';
import image16 from '../assets/chat sessions.webp';
import image17 from '../assets/Child&Adolescent.webp';
import image18 from '../assets/grief.webp';
import image19 from '../assets/music.webp';
import image20 from '../assets/Geriatric Therapy.webp';
import image21 from '../assets/Hypno.webp';
import image22 from '../assets/crises counseling.webp';

// Importing images for services
import serviceImage1 from '../assets/MentalHealthServices.webp';
import serviceImage2 from '../assets/Wellness Offerings.webp';
import serviceImage3 from '../assets/Training and Internship Programs.webp';
import serviceImage4 from '../assets/Children’s Section.webp';
import serviceImage5 from '../assets/Trauma Day Care Center.webp';
import serviceImage6 from '../assets/Potential Workshops.webp';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isTherapies, setIsTherapies] = useState(true);

  const therapies = [
    { name: 'One-on-One Sessions', image: image1, description: 'Personalized therapy sessions tailored to individual needs, focusing on mental health and well-being in a confidential setting.' },
    { name: 'Couples Counseling', image: image2, description: 'Helps partners understand and resolve conflicts, improve communication, and strengthen their relationship.' },
    { name: 'Family Counseling', image: image3, description: 'Addresses family dynamics to resolve issues and improve relationships within the family.' },
    { name: 'Group Counseling', image: image4, description: 'Therapy sessions with a group of people experiencing similar issues, fostering shared experiences and mutual support.' },
    { name: 'Career Counseling', image: image5, description: 'Guidance to help individuals make informed career decisions and overcome work-related challenges.' },
    { name: 'Substance Abuse', image: image6, description: 'Support and strategies to help individuals overcome addiction and lead a healthy, substance-free life.' },
    { name: 'Marriage Counseling', image: image7, description: 'Helps married couples work through challenges, improve communication, and strengthen their bond.' },
    { name: 'Trauma Therapy', image: image8, description: 'Specialized therapy to help individuals process and heal from traumatic experiences.' },
    { name: 'Sex Therapy', image: image9, description: 'Addresses sexual issues in a safe, confidential environment, helping individuals and couples improve their sexual health.' },
    { name: 'Rehabilitation', image: image10, description: 'Therapy to assist individuals in recovering from physical, mental, or emotional challenges.' },
    { name: 'LGBTQIA+ Counseling', image: image11, description: 'Support for LGBTQIA+ individuals dealing with issues related to sexual orientation, gender identity, and relationships.' },
    { name: 'Health Counseling', image: image12, description: 'Guidance and support to help individuals manage and improve their overall health and well-being.' },
    { name: 'Psychoeducation', image: image13, description: 'Educational sessions to help individuals and families understand mental health conditions and treatment options.' },
    { name: 'Oncology Counseling', image: image14, description: 'Support for individuals and families dealing with cancer, focusing on emotional, mental, and social aspects of care.' },
    { name: 'Online Sessions', image: image15, description: 'Convenient therapy sessions conducted online, allowing individuals to receive support from the comfort of their home.' },
    { name: 'Chat Sessions', image: image16, description: 'Text-based therapy sessions that offer convenience and flexibility for those who prefer written communication.' },
    { name: 'Child and Adolescent Counseling', image: image17, description: 'Therapy designed to address the unique mental health needs of children and adolescents.' },
    { name: 'Grief Counseling', image: image18, description: 'Support for individuals coping with the loss of a loved one, helping them process their grief and move forward.' },
    { name: 'Music Therapy', image: image19, description: 'A therapeutic approach that uses music to address physical, emotional, cognitive, and social needs.' },
    { name: 'Geriatric Counseling', image: image20, description: 'Support for older adults dealing with aging-related issues such as health, loss, and transition.' },
    { name: 'Hypnotherapy', image: image21, description: 'A therapeutic technique that uses hypnosis to help individuals overcome various psychological and physical issues.' },
    { name: 'Crisis Counseling', image: image22, description: 'Immediate, short-term assistance to help individuals manage and overcome a crisis situation.' },
  ];

  const services = [
    { name: 'Mental Health Services', image: serviceImage1, description: 'Our offerings will include individual and group therapy, counseling, and specialized programs addressing various aspects of mental health, such as stress management, anxiety, and depression.' },
    { name: 'Wellness Offerings', image: serviceImage2, description: 'In addition to mindfulness practices, yoga, and nutritional guidance, we will provide trusted supplements and IV drops to help our customers feel better. Each client will have access to packages specifically tailored to their needs.' },
    { name: 'Training and Internship Programs', image: serviceImage3, description: 'We will offer training and internship opportunities for aspiring mental health professionals, alongside specialized courses designed to enhance skills in counseling, wellness coaching, and holistic therapies.' },
    { name: 'Children’s Section', image: serviceImage4, description: 'A dedicated area within our center will cater specifically to children, offering age-appropriate therapy and wellness activities to support their mental and emotional development.' },
    { name: 'Trauma Day Care Center', image: serviceImage5, description: 'Our trauma day care center will provide a safe and supportive environment for individuals dealing with trauma, offering specialized care and therapeutic interventions to aid in their recovery.' },
    { name: 'Potential Workshops', image: serviceImage6, description: 'Envisioned workshops include stress reduction techniques, self-exploration, sleep improvement, and body positivity, designed to equip clients with practical tools for everyday wellness.' },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const toggleTherapiesServices = () => {
    setIsTherapies(!isTherapies);
  };

  return (
    <div className="services-page">
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" checked={isTherapies} onChange={toggleTherapiesServices} />
          <span className="slider round"></span>
        </label>
        <h1>{isTherapies ? 'Therapies' : 'Services'}</h1>
      </div>
      <div className="services-grid">
        {(isTherapies ? therapies : services).map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleServiceClick(service)}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="service-overlay"></div>
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="orb-container" onClick={(e) => e.stopPropagation()}>
            <div className="orb-content">
              <h2>{selectedService.name}</h2>
              <p>{selectedService.description}</p>
            </div>
            <button className="orb-close-button" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
