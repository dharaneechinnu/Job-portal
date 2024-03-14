import React from 'react'
import './About.css'
import about from '../assets/about.jpg'
import Cont from '../contact/Cont'
const About = () => {
  return (
  <>
   <div className="about-page-container" id='About'>
        <h1>About Us</h1>
      <div className="about-page-content">
        <img src={about} alt="" className='about-img'/>
     
      </div>
      <h2>
Multi-Hospital Hub connects patients worldwide with top-tier doctors, offering seamless appointment booking. Our platform bridges the gap between healthcare seekers and providers, ensuring access to quality care anytime, anywhere. Join us in revolutionizing healthcare.
</h2>
    </div>
    <Cont/>
  </>
  )
}

export default About