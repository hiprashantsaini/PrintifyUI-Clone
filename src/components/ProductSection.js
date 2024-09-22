import React from 'react';
import './styles/productSection.css';

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="product-grid">
        <div className="product-card">
          <img src="product-image1.png" alt="Product 1" />
        </div>
        <div className="product-card">
          <img src="product-image2.png" alt="Product 2" />
        </div>
        {/* Add more cards here */}
      </div>
    </section>
  );
};

export default ProductSection;
