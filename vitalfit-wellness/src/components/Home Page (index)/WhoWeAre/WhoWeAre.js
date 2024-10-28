// src/components/WhoWeAre.js
import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <section className="whoweare">
      <h2>Who We Are</h2>
      <p>
        At VitalFit & Wellness, we are dedicated to empowering individuals to live healthier, more fulfilling lives. Our holistic approach to wellness blends physical fitness, mental well-being, and personalized coaching, creating a supportive community where everyone can thrive.
      </p>
      <div className="whoweare-images">
        <img src="/csce242/projects/part4/images/whoweare1.jpg" alt="Who We Are Image 1" className="whoweare-image" />
        <img src="/csce242/projects/part4/images/whoweare2.jpg" alt="Who We Are Image 2" className="whoweare-image" />
      </div>
    </section>
  );
};

export default WhoWeAre;