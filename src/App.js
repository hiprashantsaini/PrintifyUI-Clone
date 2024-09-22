
import React from 'react';
import './App.css';
import AllProductSection from './components/AllProductSection';
import CTA from './components/CTA';
import CustomProduct from './components/CustomProduct';
import DownArrow from './components/DownArrow';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero/>
      <FeatureSection />
      <DownArrow/>
      <AllProductSection/>
      <CTA />
      <CustomProduct/>
      <StatsSection />
      <Footer/>
    </div>
  );
};
export default App;
