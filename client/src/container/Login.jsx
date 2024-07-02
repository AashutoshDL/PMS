    import React from 'react'
    import skillImg from '../assets/skill.jpg'
    import './login.css'
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
    import {faGoogle, faFacebook} from '@fortawesome/free-brands-svg-icons'
    
    const Login = () => {
      return (
      <div className='login-container'>
      <div className="login-image-container">
        <img src={skillImg} alt='skillImg' />
      </div>
          {/* ------------------------------------------------------------ */}
      <div className="login-text-container">
        <h2>LOGIN</h2>
          <div className="login-email-container">
              <h3>Email</h3>
              <input type='text' placeholder='Enter your email'/>
          </div>
          {/* ------------------------------------------------------------ */}
          <div className="login-password-container">
              <h3>Password</h3>
              <input type='password' placeholder='Enter your password'/>
              <p>Forgot Passowrd ?</p>
          </div>
          <div className="login-button-container">
          <button className='login-button'><h2>Login</h2></button>
          </div>
          {/* ------------------------------------------------------------ */}
          <div className="login-other-container">
          <h2>OR</h2>
          {/* <div className="icons">
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon icon={faFacebook} />
          </div> */}
          <hr />
          <div className="login-suggestion-text">
          <p>Don't have an account ?</p>  <h4>   Register</h4>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Login
