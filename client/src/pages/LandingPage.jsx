import React, { useEffect } from 'react';
import Services from '../components/Services';
import FStack from '../components/FStack';
import SpecializationSection from '../components/SpecializationSection';
import Footer from '../components/Footer';
import FeedbackTree from './FeedBackTree';
import ChooseTherapistModal from '../components/ChooseTherapistModal';
import HowItWorks from '../components/HowItWorks';
import { motion, stagger, useAnimate } from "framer-motion";
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const tagline = "Wherever humanity resides, the pulse of mental well-being follows";
  const [scope, animate] = useAnimate();
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: "blur(0px)",
    }, {
      duration: 1.5, // Smoother and slower animation duration
      delay: stagger(0.5), // Slight delay between words for a smoother effect
    });
  }, [scope]);

  // Define the cards array
  const cards = [
    {
      id: 1,
      content: (
        <>
          ✨ <b>Dr. Moumita Nandy's sessions are incredibly transformative!</b> ✨<br /><br />
          Her unique approach has helped me gain new insights into my life.<br />
          <mark className="highlight">Her empathy and understanding make every session valuable. 🌟</mark>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          🌟 <b>Dr. Moumita Nandy is an outstanding therapist.</b> 🌟<br /><br />
          She listens attentively and offers practical advice that I can apply in my daily life.<br />
          <mark className="highlight">Her sessions have provided me with a new perspective. 💬</mark>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          😊 <b>Dr. Moumita Nandy is truly exceptional.</b> 😊<br /><br />
          Her insights and guidance have been immensely beneficial for my mental health.<br />
          <mark className="highlight">Her techniques have significantly improved my well-being. 🧠</mark>
        </>
      ),
    },
  ];

  const handleBookAppointment = () => {
    navigate('/specializations'); // Redirect to Specializations page
  };

  const handleSeeAllServices = () => {
    navigate('/services'); // Redirect to Services page
  };

  return (
    <div className="landing-page">
      <ChooseTherapistModal />
      <div className="header-section">
        <div className="header-overlay"></div>
        <div className="hero-content">
          <motion.div className="centered-text tagline-container" ref={scope}>
            {tagline.split(" ").map((word, idx) => (
              <motion.span
                key={word + idx}
                className="tagline-word"
                style={{
                  filter: "blur(10px)",
                  opacity: 0,
                  marginRight: "10px", // Add space between words
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
          <div className="button-container">
            <button className="appointment-button" onClick={handleBookAppointment}>Choose your therapist now</button>
          </div>
        </div>
      </div>

      <div className="content">
        <HowItWorks />
        <div className="fstack-section">
          <div className="fstack-content">
            <div className="inspiring-stories">
              <p>Look at some inspiring stories</p>
            </div>
            <div className="fstack-component">
              <FStack items={cards} offset={15} scaleFactor={0.05} />
            </div>
          </div>
        </div>

        <SpecializationSection />
        <Services />
        <div className="see-all">
          <button className="see-all-button" onClick={handleSeeAllServices}>See All</button>
        </div>
        <FeedbackTree />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
