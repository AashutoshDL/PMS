import React from 'react'
import './homepage.css'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate=useNavigate();

  return (
    <div>
      <h1 className='container'>
        <button onClick={()=>{navigate('/auth')}}>Loign/Signup</button>
        <button  onClick={()=>{navigate('/events')}}>Events</button>
        <button onClick={()=>{navigate('/projects')}}>Projects</button>
      </h1>
    </div>
  )
}

export default Homepage
