import React from 'react';
import { useParams } from 'react-router-dom';
import './TherapistDetails.css';

// Import the background and therapist photos
import bgGradient from '../assets/bgGradient.jpg';
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
    email: 'palak.kathuria@example.com',
    qualifications: [
      'M.Sc. Forensic Psychology (NFSU, Gandhinagar)',
      'B.Sc. Clinical Psychology (Amity University, Gurugram)',
    ],
    description: `Ms. Palak Kathuria is a Forensic and Counselling Psychologist, specializing in personality psychology. Her therapeutic approach is eclectic, trauma-informed, queer-affirmative, and customized for each individual. She emphasizes "liberty to express" and is driven towards humanism and existentialism. She is skilled in personality profiling, investigation, body language analysis, and lie detection.`,
    bookingLink: 'https://cal.com/manmeetsingh', // Replace with actual booking link
  },
  {
    id: '66d472f59aea15993a72e895',
    name: 'Sanjh Dubey',
    photo: photo2,
    specialization: 'Counselling Psychologist',
    email: 'sanjh.dubey@example.com',
    qualifications: [
      'B.A. Psychology (Pune University)',
      'M.A. Clinical Psychology (Amity University)',
    ],
    description: `Ms. Sanjh Dubey is a compassionate and experienced Counselling Psychologist, providing a supportive and non-judgmental space for individuals to explore their thoughts, feelings, and experiences. She has trained in various therapeutic modalities and tailors personalized therapeutic plans to meet each client's unique needs and goals.`,
    bookingLink: 'https://example.com/book-sanjh', // Replace with actual booking link
  },
  {
    id: '66d472f59aea15993a72e896',
    name: 'Gaganpreet Kaur',
    photo: photo3,
    specialization: 'Psychotherapist',
    email: 'gaganpreet.kaur@example.com',
    qualifications: [
      'B.A. (Hons) Psychology (University of Delhi)',
      'M.A. Clinical Psychology (Amity University)',
    ],
    description: `Ms. Gaganpreet Kaur is a psychotherapist with an eclectic approach, dedicated to facilitating individual mental well-being through a safe and open space. She emphasizes the use of art as a medium of catharsis and self-exploration.`,
    bookingLink: 'https://example.com/book-gaganpreet', // Replace with actual booking link
  },
  {
    id: '66d472f59aea15993a72e897',
    name: 'Ramya R.S',
    photo: photo4,
    specialization: 'Eclectic Psychologist',
    email: 'ramya.rs@example.com',
    qualifications: [
      'M.A. Clinical Psychology (University of Mumbai)',
      'Certification in Expressive Arts Therapy',
    ],
    description: `Ms. Ramya R.S is an experienced psychologist with over two years of practice. Her eclectic approach combines various psychotherapy techniques tailored to meet the diverse needs of her clients. She integrates creative modalities into her practice, enhancing the therapeutic process through artistic expression.`,
    bookingLink: 'https://example.com/book-ramya', // Replace with actual booking link
  },
  {
    id: '66d472f59aea15993a72e898',
    name: 'Neha',
    photo: photo5,
    specialization: 'Counselling Psychologist',
    email: 'neha@example.com',
    qualifications: [
      'B.A. Psychology (Indraprastha College for Women, University of Delhi)',
      'M.A. Applied Psychology (Clinical and Counselling Practice, TISS, Mumbai)',
    ],
    description: `Ms. Neha is a counselling psychologist with the aim to empower individuals and help them navigate through their unique experiences. She provides a non-judgmental, client-centric, safe, and collaborative space for her clients.`,
    bookingLink: 'https://example.com/book-neha', // Replace with actual booking link
  },
  {
    id: '66d472f59aea15993a72e899',
    name: 'Tanya Rajwanshi',
    photo: photo6,
    specialization: 'Counselling Psychologist',
    email: 'tanya.rajwanshi@example.com',
    qualifications: [
      'B.A. Applied Psychology',
      'M.A. Clinical Psychology',
      'Certified Expressive Art Therapist',
      'Certified POSH Trainer',
    ],
    description: `Ms. Tanya Rajwanshi is a dedicated Counselling Psychologist with years of experience delivering effective, client-centered therapy. She specializes in anxiety, depression, and relationship challenges, and has conducted workshops for students and corporates.`,
    bookingLink: 'https://example.com/book-tanya', // Replace with actual booking link
  },
  {
    id: '66d472f59aea15993a72e89a',
    name: 'Shreyansi Sahai',
    photo: photo7,
    specialization: 'Art Therapist',
    email: 'shreyansi.sahai@example.com',
    qualifications: [
      'Pursuing Ph.D. in Applied Psychology (Art Therapy) – Manav Rachna International Institute of Research and Studies',
      'M.A. in Clinical Psychology – University of Mumbai',
      'Diploma in Clinical Hypnotherapy – California Hypnosis Institute',
    ],
    description: `Ms. Shreyansi Sahai is a trained Art Therapist with expertise in integrating creative arts into therapeutic practices. She uses colors, symbols, and metaphors to facilitate self-exploration and help individuals connect with their emotions.`,
    bookingLink: 'https://example.com/book-shreyansi', // Replace with actual booking link
  },
  {
    id: '66d472f59aea15993a72e89b',
    name: 'Muskan Aggarwal',
    photo: photo8,
    specialization: 'Counselling Psychologist and Career Coach',
    email: 'muskan.aggarwal@example.com',
    qualifications: [
      'Post Graduate Diploma in Guidance and Counseling, Jamia Millia Islamia',
      'M.A. Clinical Psychology, Amity University Noida',
      'B.A. Applied Psychology, Amity University Noida',
    ],
    description: `Ms. Muskan Aggarwal is a counselling psychologist and career coach. She believes in a holistic, client-centered, and empathetic approach to counseling. Her practice encompasses a wide spectrum of mental health concerns, including depression, anxiety, and self-esteem issues.`,
    bookingLink: 'https://example.com/book-muskan', // Replace with actual booking link
  },
  {
    id: '66d472f59aea15993a72e89c',
    name: 'Smridhi Mehindru',
    photo: photo9,
    specialization: 'Counseling Psychologist and Certified Clinical Hypnotherapist',
    email: 'smridhi.mehindru@example.com',
    qualifications: [
      'M.A. Clinical Psychology',
      'Certification in Clinical Hypnotherapy',
    ],
    description: `Ms. Smridhi Mehindru is a counseling psychologist and certified clinical hypnotherapist specializing in anxiety and stress management. She also provides tailored interventions for various fears and phobias, using hypnosis to facilitate effective resolution.`,
    bookingLink: 'https://example.com/book-smridhi', // Replace with actual booking link
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

const TherapistDetails = () => {
  const { id } = useParams();
  const therapist = therapists.find(t => t.id === id);

  if (!therapist) return <div>Therapist not found</div>;

  return (
    <div
      className="therapist-details"
      style={{ backgroundImage: `url(${bgGradient})` }}
    >
      <div className="therapist-container">
        <div className="therapist-header">
          <img src={therapist.photo} alt={therapist.name} className="therapist-photo" />
          <div className="therapist-info">
            <h1>{therapist.name}</h1>
            <h3>{therapist.specialization}</h3>
            <p className="therapist-email">Email: <a href={`mailto:${therapist.email}`}>{therapist.email}</a></p>
          </div>
        </div>

        {therapist.qualifications && (
          <div className="therapist-qualifications">
            <h4 className="centered-heading">Qualifications</h4>
            <ul>
              {therapist.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="therapist-description">
          <h4 className="centered-heading">About</h4>
          <p>{therapist.description}</p>
        </div>

        {therapist.bookingLink && (
          <a 
            href={therapist.bookingLink} 
            className="book-appointment-button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book Appointment
          </a>
        )}
      </div>
    </div>
  );
};

export default TherapistDetails;
