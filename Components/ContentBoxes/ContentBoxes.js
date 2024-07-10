import React from 'react';
import './ContentBoxes.css';
import Solar from '../Solarsystem/Solar';

const ContentBoxes = () => {
  return (
    <div className="content">
      <div className="content-box">
        <div className="color-boxes">
          <span className="red"></span>
          <span className="blue"></span>
          <span className="yellow"></span>
          <span className="pink"></span>
        </div>
        <div className='cr'>
        <p>Time for creativity - 24</p>
        </div>
        <div className='Bigtext'>
        
        <p>OWN YOUR</p>
        <p>STRENGTH,</p>
        <p>OWN YOU</p>
        </div>
        <button className="content-button">START YOUR JOURNEY</button>
      </div>
      <div className="content-box solar-system">
        <Solar />
      </div>
    </div>
  );
}

export default ContentBoxes;
