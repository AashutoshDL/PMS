import React from 'react'
import './skillmuseum.css'
import { useNavigate } from 'react-router-dom'

const SkillMuseum = () => {
  const navigate=useNavigate();

  return (
    <div>
      <h1 className='container'>
        {/* <button  onClick={()=>{navigate('/events')}}>Events</button> */}
        <button onClick={()=>{navigate('/projects')}}>Projects</button>
      </h1>
    </div>
  )
}

export default SkillMuseum
