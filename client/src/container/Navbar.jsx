import React from 'react'
import logo from '/inglogo.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();

  return (
    <div className='navbar-container'>
      <div className="navbar-logo">
        <img src={logo} alt="navbar-logo" onClick={()=>{navigate('/')}}/>
      </div>
      <div className="navbar-elements">
        <div className="nav-sec1" onClick={()=>{navigate('/')}}>Home</div>
        <div className="nav-sec2" onClick={()=>{navigate('/calendar')}}>Calendar</div>
        <div className="nav-sec3" onClick={()=>{navigate('/todo')}}>To-Do</div>
        <div className="nav-sec4" onClick={()=>{navigate('/profile')}}>Profile</div>
      </div>
      <div className="auth-elements">
        <button className='login' onClick={()=>{navigate('/login')}}>Login</button>
        <button className='register' onClick={()=>{navigate('/register')}}>Register</button>
      </div>
    </div>
  )
}

export default Navbar
