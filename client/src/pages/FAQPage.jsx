import React, { useState } from "react";
import "./FAQPage.css";
import faqImage from "../assets/FAQs.png"; // Ensure the path is correct
import faqBG from "../assets/FAQBG.webp"; // Import the background image

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of therapy do you offer?",
      answer: "We offer a wide range of therapies including cognitive-behavioral therapy (CBT), psychotherapy, couples counseling, family therapy, and more.",
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment through our website by visiting the 'Book Appointment' section or by calling our office directly.",
    },
    {
      question: "Do you offer online therapy sessions?",
      answer: "Yes, we offer online therapy sessions via secure video conferencing platforms.",
    },
    {
      question: "What should I expect during my first therapy session?",
      answer: "During your first session, your therapist will discuss your goals, gather some background information, and work with you to create a plan for your therapy.",
    },
    {
      question: "Are the therapy sessions confidential?",
      answer: "Yes, all therapy sessions are confidential. We adhere to strict privacy and confidentiality guidelines.",
    },
  ];

  return (
    <div className="faq-page" style={{ backgroundImage: `url(${faqBG})` }}>
      <div className="faq-content">
        <div className="image-container">
          <img src={faqImage} alt="FAQs" />
        </div>
        <div className="faq-container">
          <h1 className="FAQ_HEADING">All The Answers</h1>
          <p className="faq-subheading">Find trust-worthy answers on all things mental health at Dr. Nandy's Mind Studio.</p>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
