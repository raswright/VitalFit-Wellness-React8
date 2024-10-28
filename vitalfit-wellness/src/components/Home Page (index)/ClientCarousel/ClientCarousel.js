// src/components/ClientCarousel.js
import React from 'react';
import './ClientCarousel.css';

const ClientCarousel = () => {
  return (
    <section className="client-carousel">
      <h2>Our Client Success Stories</h2>
      <div className="carousel">
        <div className="carousel-item">
          <p>"VitalFit & Wellness has been a life-changer. The support from the coaches is incredible!" - Zoe Johnson</p>
        </div>
        <div className="carousel-item">
          <p>"From VitalFit & Wellness, I not only lost weight, but they helped me gain confidence and a healthier lifestyle." - Liam Harrison</p>
        </div>
        <div className="carousel-item">
          <p>"I've found a supportive community in the classes that truly makes me feel good." - Elijah Brown</p>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;