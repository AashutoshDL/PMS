import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate= useNavigate()

  const handleNav= ()=>{
    navigate('/skillmuseum')
  }
  return (
    <div className='home-container'>
        <div className="hero-text">
      <h2>Welcome to ING Skill's <br /></h2><h1> Project Management System</h1>
      <h4>Dive into your project management journey</h4>
        </div>

      <div className="homepage-department">
      <h3>Select your department</h3><br /> 
      <div className="dept-buttons">
        <button className='museum' onClick={handleNav}>Skill Museum</button>
        <button className='adu'>Academic Directional Unit</button>
        <button className='branding'>Branding</button>
        <button className='operations'>Operations</button>
      </div>
      </div>    
    </div>
  )
}

export default Home