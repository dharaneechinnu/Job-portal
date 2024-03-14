/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  const [color, setColor] = useState(false);
  const history = useNavigate()
  const handlelogout = () =>{
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
 history('/')
  }

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    // Cleanup function to remove the event listener when component unmounts
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      const startTime = performance.now();
      const duration = 1000; 
  
      const animation = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
  
        window.scrollTo(0, easeInOutQuad(progress) * (y - yOffset));
  
        if (elapsedTime < duration) {
          requestAnimationFrame(animation);
        }
      };
  
      requestAnimationFrame(animation);
    }
  };
  
  const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
  scrollToSection('targetSectionID');
  
  return (
    <>
   <div className={color ? "header header-bg" : "header"}>
      <div className="log">
       <h2>Insta Serve</h2>

      </div>
      <ul className="nav-menu">
       
        
      <li><a onClick={() => scrollToSection('home')}>Home</a></li>
      <li><a onClick={() => scrollToSection('About')}>About</a></li>
      <li><a onClick={() => scrollToSection('Contact')}>Contact us</a></li>
    
      <li><a onClick={handlelogout} >Logout </a></li>
  
      </ul>
    </div>
    </>
  );
};

export default Nav;
