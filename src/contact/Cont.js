// Cont.js

import React from 'react';
import Nav from '../Nav/Nav';
import './contact.css';

const Cont = ({ userName }) => {
  return (
    <>
      <Nav userName={userName} />
     <p>
      Contact ous through any feedback this email id <a href="mailto:">abc@gmail.com</a> 
     </p>
    </>
  );
};

export default Cont;
