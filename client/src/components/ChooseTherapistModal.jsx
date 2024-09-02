import React from 'react';
import './ChooseTherapistModal.css';

const ChooseTherapistModal = () => {

  const handleRedirect = () => {
    window.location.href = '/specializations'; // Redirect to Specializations page
  };

  return (
    <div className="choose-therapist-modal" onClick={handleRedirect}>
      <p>Choose your therapist now</p>
    </div>
  );
};

export default ChooseTherapistModal;
