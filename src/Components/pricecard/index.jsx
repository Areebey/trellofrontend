import React from 'react'
import './index.css'
import price from "../../images/pricecard.PNG"
//import img from "../../images/slider1.PNG"

function Card() {
  return (
    <div>
        <h1>
        Trello priced your way
        </h1>
        
        <p>Trusted by millions, Trello powers teams all around the world.</p>
        <button>Compare Plans</button>
        <div>
        <image className='img' src={price} alt='price card show'/>;
        </div>
        
    </div>
  )
}

export default Card