import React from 'react';
import './ContentBoxes.css';

const ContentBoxes = () => {
  return (
    <div className="content">
      <div className="content-box">
        <h2>OWN YOUR STRENGTH, OWN YOU</h2>
        <button className="content-button">START YOUR JOURNEY</button>
      </div>
      <div className="content-box solar-system">
        <div className="stars"></div>
        <img src={''} alt="Logo Planet" className="center-planet" />
        <div className="planet planet1"></div>
        <div className="planet planet2"></div>
        <div className="planet planet3"></div>
        <div className="planet planet4"></div>
      </div>
    </div>
  );
}

export default ContentBoxes;
