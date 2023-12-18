import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='main-header-inner'>
    <div className="showcase container">
    <div className="row">
      <div className="col s12 m10 offset-m1 center">
        <h5>Welcome To MockHub</h5>
        <h1>Build For The Future</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
          fugit deserunt quos provident aliquam inventore.
        </p>
        <br />
        <br />
        <a href="solutions.html" className="btn btn-large white purple-text">
          Learn More
        </a>
        <a href="signup.html" className="btn btn-large purple white-text">
          Sign Up
        </a>
      </div>
    </div>
  </div>
  </div>
  )
}

export default HeroSection
