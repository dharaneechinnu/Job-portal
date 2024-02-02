import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import './Nav.css';

const Nav = ({ userName }) => {
  
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/Job">All Job</Link>
          </li>
          <li className="nav-item">
            <Link to="/home">My Job</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>

          <div className="user">
            {userName && (
              <>
                <FaRegCircleUser />
                {userName}
              </>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
