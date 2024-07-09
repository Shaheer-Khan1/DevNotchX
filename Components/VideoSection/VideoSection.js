import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <video width="100%" controls>
          <source src="/assets/videos/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-info">
        <img src="/assets/images/your-image.jpeg" alt="Contact" />
        <h2>CONTACT US & RISE STRONGER</h2>
        <p>24/7 SUPPORT<br />1234 FITNESS LN, BROOKLYN, NY</p>
      </div>
    </div>
  );
}

export default VideoSection;
