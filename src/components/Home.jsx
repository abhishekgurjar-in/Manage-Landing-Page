import React from 'react'
import illustration from "../assets/images/illustration-intro.svg"
const Home = () => {
  return (
    <div className='home'>
      <div className="left-home">
        <h1>Bring everyone together to build better products.</h1>
        <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <div className="button">
          <p>Get Started</p>
        </div>
      </div>
      <div className="right-home">
          <img src={illustration} alt="" />
      </div>
    </div>
  )
}

export default Home