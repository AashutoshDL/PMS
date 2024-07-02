import React from 'react'
import logo from '../assets/inglogo.png'
const Register = () => {
  return (
    <div className='register-container'>
      <div className="image-container">
        <img src={logo} alt="register-image" />
      </div>
      <div className="name-container">
      <h3>Name</h3>
      <input type="text" placeholder='Enter your name' />
      </div>
      <div className="register-email-container">
      <h3>Email</h3>
      <input type="email" placeholder='Enter your email' />
      </div>
      <div className="contact-container">
      <h3>Contact</h3>
      <input type="text" placeholder='Enter your contact number' />
      </div>
      <div className="department-container">
      <h3>Department</h3>
      <input type="text" placeholder='Enter the department you work in' />
      </div>
      <div className="register-password-container">
      <h3>Password</h3>
      <input type="password" placeholder='Enter your password' />
      </div>
      <div className="confirm-password">
      <h3>Confirm Password</h3>
      <input type="password" placeholder='Enter your password again' />
      </div>
      <div className="status">
      <h3>Status</h3>
      <input type="text" placeholder='Enter your status(intern/staff)' />
      </div>
      <button className='register-button'><h2>Register</h2></button>
      <hr />
      <p>Already have an account ?</p><h2>Login</h2>
    </div>
  )
}

export default Register
