import CheckIcon from '@mui/icons-material/Check';
import React from 'react';
import "./styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Create and sell custom products</h1>
        <div className='hero-content-div'>
          <p><CheckIcon style={{color:"green"}}/><span>100% free to use</span></p>
          <p><CheckIcon style={{color:"green"}}/><span>High-quality products</span></p>
          <p><CheckIcon style={{color:"green"}}/> <span>Largest global print network</span></p>
        </div>
        <div className="hero-buttons">
          <button className="cta-btn">Start for Free</button>
          <button className="learn-btn">How it works?</button>
        </div>
        <p style={{margin:"10px",color:"green",fontWeight:"600"}}>Trusted by over 8M sellers around the world</p>
      </div>
      <div className="hero-image">
        <img src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="Product Mockup" />
      </div>
    </section>
  );
};

export default Hero;
