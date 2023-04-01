import React from 'react'
import './index.css'
import Heading4Card from '../Heading4Card'

export default function Heading4() {
  const cardItems = [
    {
      imgSrc: 'https://images.ctfassets.net/rz1oowkt5gyp/gMfkjoA3yWYG3kat3qjpW/3902bfdfccf08869e33d63bbc9d1969b/Integrations_Puzzle.svg',
      para1: 'Integrations',
      para2: 'Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.',
      paraBtn: 'Browse Integrations',
    },
    {
      imgSrc: 'https://images.ctfassets.net/rz1oowkt5gyp/7wxRW93hvb7858bMsK4LSs/f6fc44fb23dbc6ee9bc6a7f6e2af0fb7/Gears.svg',
      para1: 'Butler Automation  ',
      para2: 'No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.',
      paraBtn: 'Get to know Automation',
    },
    {
      imgSrc: 'https://images.ctfassets.net/rz1oowkt5gyp/mNa3Mi7T6ga2OTrNxJx1D/8991b8d57cd6ec7330398c7a8757b4dc/Search_Value.svg',
      para1: 'Trello Enterprise',
      para2: 'The productivity tool teams love, paired with the features and security needed for scale.',
      paraBtn: 'Explore Enterprise',
    },
  ]
  return (
    <div className='contentContainer4'>
      <div className="contentContainer4Section1">
        <p className="contentContainer4Section1Para">POWERFUL WAYS TO GROW</p>
      </div>
      <div className="contentContainer4Section2">
        <p className="contentContainer4Section2Para">
          Do more with Trello </p>
      </div>
      <div className="contentContainer4Section3">
        <p className="contentContainer4Section3Para">Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
      </div>
      <div className="contentContainer4Section4">
        {cardItems.map((item) => {
          return <Heading4Card imgSrc={item.imgSrc} para1={item.para1} para2={item.para2} paraBtn={item.paraBtn} />
        })}
      </div>
    </div>
  )
}
