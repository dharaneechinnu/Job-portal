import React from 'react';
import { Link } from 'react-router-dom';
import './log.css'; // Assuming you have a CSS file for your styling

const Log = ({ handleSubmit, setname, setPassword,setEmail }) => {
  return (
    <div className="center-container">
      <div className="login-container">
        <h2 className='login_title'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='Name'>Name:</label><br></br>
            <input
              type="text"
              className='names_text'
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='Name'>email:</label><br></br>
            <input
              type="email"
              className='names_text'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='password'>Password:</label>
            <input
              type="password"
              className='pwd_text'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <p>
            Don't have an account <Link to='/register'>SignUp</Link>
          </p>
          <button type="submit" className='sub_text'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Log;
