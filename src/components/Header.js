import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import React, { useState } from 'react';
import './styles/header.css';

const Header = () => {
  const [innerWidth,setInnerWidth]=useState(window.innerWidth);
  const [showNav,setShowNav]=useState(false);

  window.onresize=() => {
    const innWidth = window.innerWidth;
    setInnerWidth(innWidth);
  }
  console.log("innerWidth :", innerWidth)

  window.onscroll=()=>{
    const innerheight = window.scrollTo;
    console.log("innerheight :", innerheight)
  }
  return (
    <header className="header">
      <div className="logo">
      {
        innerWidth<=768 && <DensityMediumIcon onClick={()=>setShowNav(!showNav)} style={{cursor:"pointer"}}/>
      }
        <img src='https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg' alt="Logo" />
      </div>
      <nav className="nav" style={showNav ? {display:"block"}:{}}>
        <ul>
          <li><a href="#">Home</a></li>
          <li className='dropdown-list'><a href="#">How it works </a><ArrowDropDownIcon className='dropdown-pointer' />
            <div className='dropdown'>
              <ul>
                <li>How printify Works</li>
                <li>Print on demand</li>
                <li>Printify quality promise</li>
                <li>What to sell?</li>
              </ul>
            </div>
          </li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

