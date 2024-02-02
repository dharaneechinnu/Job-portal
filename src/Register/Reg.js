import React from 'react'
import './reg.css'
const Reg = ({handlesign,setname,setEmail,setPassword}) => {
  return (
   <>
    <div className="center-containers">
     <div className="register-containers">
      <h2 className='registers_title'>Register</h2>
      <form onSubmit={handlesign}>
      <div className="form-groups">
          <label className='Names'>Name:</label>
          <input
            type="text"
            className='nametext'
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div className="form-groups">
          <label className='email'>Email:</label>
          <input
            type="text"
            className='emailtext'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-groups">
          <label className='pwd'>Create Password:</label>
          <input
            type="password"
            className='pwdtext'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='submit'>Register</button>
      </form>
    </div>
    </div>
   </>
  )
}

export default Reg