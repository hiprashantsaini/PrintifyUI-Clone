// CTA.js (Call-to-action section with interactive buttons)
import React from 'react';
import './styles/cta.css';

const CTA = () => {
  return (
    <section className="cta">
      <h2>Ready to Get Started?</h2>
      <p>Create your first product and start selling today!</p>
      <div className="cta-buttons">
        <button className="cta-start">Start for Free</button>
        <button className="cta-learn">Learn More</button>
      </div>
    </section>
  );
};

export default CTA;
