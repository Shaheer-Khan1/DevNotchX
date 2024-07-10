import React from 'react';
import './Solar.css'; 

export default function Solar() {
  return (
    <div className="container">
      <div className="center-circle"></div>
      <div className="orbit">
        <div className="planet pink1"></div>
        <div className="planet red1"></div>
        <div className="planet blue1"></div>
        <div className="planet green1"></div>
        <div className="planet purple1"></div>
      </div>
    </div>
  );
}
