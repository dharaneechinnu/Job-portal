import React from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom';
import './View.css'
import About from './About';
const View = () => {
  return (
   
   <>
     <div className="home-page">
    <Nav/>
    <div className="content-page">
      <div className="main-page">
        <h2>Welcome to Insta Serve</h2>
        <h2>Quick, Fresh, and Delicious</h2>
        <h2> Serving Satisfaction Instantly! </h2>
         <button type="submit" className='btn-app' ><Link to="/job" style={{ color: 'inherit', textDecoration: 'inherit'}}>View</Link> </button>
         <button type="submit" className='btn-app' ><Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit'}}>Add Your Job</Link> </button>
      </div>
      <div className="img-container">
        
  
        <span className='circle'></span>
      </div>
    </div>
  
   </div>
   <About/>
   </>
  )
}

export default View