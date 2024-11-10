import React from 'react'
import './HeroPage.css';
import image1 from '../../assets/images/co-work space.jpg'

const HeroPage = () => {
  return (
    <div className='hero-page'>
        <h1> Welcome to our Co-Working Space</h1>
        <img src={image1} alt="" />
    </div>
  )
}

export default HeroPage