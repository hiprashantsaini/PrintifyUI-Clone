import React from 'react';
import './styles/statsSection.css';

const StatsSection = () => {
  return (
    <section className="stats">
      <h2>Dashboard Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>150,254</p>
        </div>
        <div className="stat-card">
          <h3>Our Products Categories</h3>
          <p>1,876</p>
        </div>
        <div className="stat-card">
          <h3>Revenue Generated</h3>
          <p>$12,540</p>
        </div>
        <div className="stat-card">
          <h3>Countries</h3>
          <p>125</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
