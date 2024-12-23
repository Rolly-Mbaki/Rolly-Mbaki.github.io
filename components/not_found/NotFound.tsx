import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

const NOT_FOUND = () => {
  const NAVIGATE = useNavigate()
  return (
    <div className='notFoundContainer'>
      <img className='notFoundImg' src="/what.png" alt="Emoji with raised eyebrow" />
      <h1>What are you looking for?</h1>
      <button onClick={() => NAVIGATE('/')}>Go Back</button>
    </div>
  )
}

export default NOT_FOUND