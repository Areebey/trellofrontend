import React from 'react'
import './index.css'
import price from "../../images/pricecard.PNG"
import img from "../../images/slider1.PNG"

function Card() {
  return (
    <div className='container'>
        <h1 className='head'>
        Trello priced your way
        </h1>
        
        <p className='para'>Trusted by millions, Trello powers teams all around the world.</p>
        <button className='btn' type='submit'>Compare Plans</button>
        <div>
        <img className='img' src={price} alt='price card show'/>
        </div>
        
    </div>
  )
}

export default Card