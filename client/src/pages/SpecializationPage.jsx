import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use React Router for navigation
import './SpecializationPage.css';

// Replace the hardcoded paths with imported images
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

const therapists = [
  {
    id: '66d472f59aea15993a72e894',
    name: 'Palak Kathuria',
    photo: photo1,
    specialization: 'Forensic and Counselling Psychologist',
    description: 'Specializes in personality profiling, investigation, and working with sensitive populations.',
    details: `
      Ms. Palak Kathuria is a Forensic and Counselling Psychologist, specializing in personality psychology. Her therapeutic approach is eclectic, trauma-informed, queer-affirmative, and customized for each individual. She emphasizes "liberty to express" and is driven towards humanism and existentialism. She is skilled in personality profiling, investigation, body language analysis, and lie detection.
      
      Education:
      - M.Sc. Forensic Psychology (NFSU, Gandhinagar)
      - B.Sc. Clinical Psychology (Amity University, Gurugram)
    `,
  },
  {
    id: '66d472f59aea15993a72e895',
    name: 'Sanjh Dubey',
    photo: photo2,
    specialization: 'Counselling Psychologist',
    description: 'Experienced in Cognitive-Behavioral Therapy, Psychodynamic Therapy, and Mindfulness-Based Interventions.',
    details: `
      Ms. Sanjh Dubey is a compassionate and experienced Counselling Psychologist, providing a supportive and non-judgmental space for individuals to explore their thoughts, feelings, and experiences. She has trained in various therapeutic modalities and tailors personalized therapeutic plans to meet each client's unique needs and goals.
      
      Education:
      - B.A. Psychology (Pune University)
      - M.A. Clinical Psychology (Amity University)
    `,
  },
  {
    id: '66d472f59aea15993a72e896',
    name: 'Gaganpreet Kaur',
    photo: photo3,
    specialization: 'Psychotherapist',
    description: 'Focuses on using art as a medium of catharsis and self-exploration.',
    details: `
      Ms. Gaganpreet Kaur is a psychotherapist with an eclectic approach, dedicated to facilitating individual mental well-being through a safe and open space. She emphasizes the use of art as a medium of catharsis and self-exploration.
      
      Education:
      - B.A. (Hons) Psychology (University of Delhi)
      - M.A. Clinical Psychology (Amity University)
    `,
  },
  {
    id: '66d472f59aea15993a72e897',
    name: 'Ramya R.S',
    photo: photo4,
    specialization: 'Eclectic Psychologist',
    description: 'Integrates creative modalities into therapy, specializing in expressive arts therapy.',
    details: `
      Ms. Ramya R.S is an experienced psychologist with over two years of practice. Her eclectic approach combines various psychotherapy techniques tailored to meet the diverse needs of her clients. She integrates creative modalities into her practice, enhancing the therapeutic process through artistic expression.
    `,
  },
  {
    id: '66d472f59aea15993a72e898',
    name: 'Neha',
    photo: photo5,
    specialization: 'Counselling Psychologist',
    description: 'Aims to empower individuals and help them cultivate resilience and growth.',
    details: `
      Ms. Neha is a counselling psychologist with the aim to empower individuals and help them navigate through their unique experiences. She provides a non-judgmental, client-centric, safe, and collaborative space for her clients.
      
      Education:
      - B.A. Psychology (Indraprastha College for Women, University of Delhi)
      - M.A. Applied Psychology (Clinical and Counselling Practice, TISS, Mumbai)
    `,
  },
  {
    id: '66d472f59aea15993a72e899',
    name: 'Tanya Rajwanshi',
    photo: photo6,
    specialization: 'Counselling Psychologist',
    description: 'Certified Expressive Art Therapist and POSH Trainer.',
    details: `
      Ms. Tanya Rajwanshi is a dedicated Counselling Psychologist with years of experience delivering effective, client-centered therapy. She specializes in anxiety, depression, and relationship challenges, and has conducted workshops for students and corporates.
      
      Education:
      - B.A. Applied Psychology
      - M.A. Clinical Psychology
      - Certified Expressive Art Therapist
      - Certified POSH Trainer
    `,
  },
  {
    id: '66d472f59aea15993a72e89a',
    name: 'Shreyansi Sahai',
    photo: photo7,
    specialization: 'Art Therapist',
    description: 'Expert in integrating creative arts into therapeutic practices.',
    details: `
      Ms. Shreyansi Sahai is a trained Art Therapist with expertise in integrating creative arts into therapeutic practices. She uses colors, symbols, and metaphors to facilitate self-exploration and help individuals connect with their emotions.
      
      Education:
      - Pursuing Ph.D. in Applied Psychology (Art Therapy) – Manav Rachna International Institute of Research and Studies
      - M.A. in Clinical Psychology – University of Mumbai
      - Diploma in Clinical Hypnotherapy – California Hypnosis Institute
    `,
  },
  {
    id: '66d472f59aea15993a72e89b',
    name: 'Muskan Aggarwal',
    photo: photo8,
    specialization: 'Counselling Psychologist and Career Coach',
    description: 'Specializes in holistic, client-centered, and empathetic counseling.',
    details: `
      Ms. Muskan Aggarwal is a counselling psychologist and career coach. She believes in a holistic, client-centered, and empathetic approach to counseling. Her practice encompasses a wide spectrum of mental health concerns, including depression, anxiety, and self-esteem issues.
      
      Education:
      - Post Graduate Diploma in Guidance and Counseling, Jamia Millia Islamia
      - M.A. Clinical Psychology, Amity University Noida
      - B.A. Applied Psychology, Amity University Noida
    `,
  },
  {
    id: '66d472f59aea15993a72e89c',
    name: 'Smridhi Mehindru',
    photo: photo9,
    specialization: 'Counseling Psychologist and Certified Clinical Hypnotherapist',
    description: 'Specializes in anxiety, stress management, and sexual health.',
    details: `
      Ms. Smridhi Mehindru is a counseling psychologist and certified clinical hypnotherapist specializing in anxiety and stress management. She also provides tailored interventions for various fears and phobias, using hypnosis to facilitate effective resolution.
    `,
  },
  {
    id: '66d472f59aea15993a72e89d',
    name: 'Shailja Garg',
    photo: photo10,
    specialization: 'Psychologist',
    description: 'Focuses on emotional well-being and therapeutic support.',
    details: `
      Ms. Shailja Garg is a psychologist who provides therapeutic support for individuals facing emotional challenges...
    `,
  },
  {
    id: '66d472f59aea15993a72e89e',
    name: 'Manan Kaur Oberoi',
    photo: photo11,
    specialization: 'Clinical Psychologist',
    description: 'Expert in clinical assessments and therapeutic interventions.',
    details: `
      Ms. Manan Kaur Oberoi is a clinical psychologist specializing in assessments and interventions...
    `,
  },
  {
    id: '66d472f59aea15993a72e89f',
    name: 'Arshiya Sharma',
    photo: photo12,
    specialization: 'Embodied Wellness Expert & Holistic Coach',
    description: 'Specializes in energy psychology, movement therapy, and mindfulness.',
    details: `
      Ms. Arshiya Sharma is an embodied wellness expert and holistic coach, combining energy psychology, movement, and mindfulness...
    `,
  },
  {
    id: '66d472f59aea15993a72e8a0',
    name: 'Divyangi Mittal',
    photo: photo13,
    specialization: 'Counseling Psychologist',
    description: 'Specializes in mental health counseling and emotional well-being.',
    details: `
      Ms. Divyangi Mittal is a counseling psychologist focused on mental health and emotional well-being...
    `,
  },
  {
    id: '66d472f59aea15993a72e8a1',
    name: 'Gaurika Arora',
    photo: photo14,
    specialization: 'Therapist',
    description: 'Expert in therapeutic practices and mental health support.',
    details: `
      Ms. Gaurika Arora is a therapist providing mental health support and therapeutic practices...
    `,
  },
  {
    id: '66d472f59aea15993a72e8a2',
    name: 'Ronika Sawhney',
    photo: photo15,
    specialization: 'Therapist',
    description: 'Focuses on Humanistic and Existential therapy, trauma-informed care, and ACT.',
    details: `
      Ms. Ronika Sawhney is a therapist with expertise in Humanistic and Existential therapy, trauma-informed care, and Acceptance & Commitment Therapy...
    `,
  },
];

const SpecializationPage = () => {
  const navigate = useNavigate(); // Use React Router for navigation

  const handleCardClick = (therapistId) => {
    navigate(`/therapist/${therapistId}`);
  };

  return (
    <div className="specialization">
      <h1>Our Therapists</h1>
      <div className="therapists-list">
        {therapists.map((therapist) => (
          <div
            key={therapist.id}
            className="therapist-card"
            onClick={() => handleCardClick(therapist.id)}
          >
            <img src={therapist.photo} alt={therapist.name} />
            <h2>{therapist.name}</h2>
            <p>{therapist.specialization}</p>
            <p>{therapist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializationPage;
