import React from 'react';
import bestImg from "../assets/best-selection.svg";
import higherImg from "../assets/higher-profits.svg";
import robustImg from "../assets/robust-scaling.svg";
import './styles/featureSection.css';

const FeatureSection = () => {
  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <img src={higherImg} alt="Feature 1" />
          <h3>Higher Profits</h3>
          <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
        </div>
        <div className="feature-card">
          <img src={robustImg} alt="Feature 2" />
          <h3>Robust Scaling</h3>
          <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
        </div>
        <div className="feature-card">
          <img src={bestImg} alt="Feature 3" />
          <h3>Best Selection</h3>
          <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
