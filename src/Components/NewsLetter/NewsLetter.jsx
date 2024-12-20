import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Don’t Miss Out on Exclusive Perks</h1>
      <p>Subscribe now and stay ahead with the latest offers.</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
