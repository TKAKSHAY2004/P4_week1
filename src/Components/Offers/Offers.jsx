import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Trending Styles </h1>
        <h1>Unbeatable Prices</h1>
        <p>Discover the Latest Trends!</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
