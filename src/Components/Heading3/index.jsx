import React from 'react'
import './index.css'
import Heading3Card from '../Heading3Card'
import { ReactComponent as CardIcon1 } from '../../images/cardicon1.svg'
import { ReactComponent as CardIcon2 } from '../../images/cardicon2.svg'

export default function Heading3() {
    const cardItems = [
        {
            imgSrc: 'https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6mSpThW5HS89/f5683a167ad3f74bed4dc7592ae5a002/TrelloBoard_Timeline_2x.png?w=1080',
            para1: 'HIT DEADLINES EVERY TIME',
            para2: 'From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.',
            para3: 'Learn more about Timeline view',
        },
        {
            imgSrc: 'https://images.ctfassets.net/rz1oowkt5gyp/7sxChS4x6XAcUgDpp4VAZk/25377d162e964f4243e329c447bfd7dc/TrelloBoard_Calendar_2x.png?w=960&fm=webp',
            para1: 'STAY ON TOP OF TASKS',
            para2: 'Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.',
            para3: 'Learn more about Calendar view',
        },
    ]
    return (
        <div className='contentContainer3'>
            <div className="contentContainer3SectionA">
                <p className="contentContainer3SectionAPara">
                    See work in a whole new way
                </p>
            </div>
            <div className="contentContainer3SectionB">
                <p className="contentContainer3SectionBPara">
                    View your team’s projects from every angle and bring a fresh perspective to the task at hand.
                </p>
            </div>
            <div className="contentContainer3SectionC">
                <button className="contentContainer3SectionCBtn">
                    Discover all Trello views
                </button>
            </div>
            <div className="contentContainer3SectionD">
                {cardItems.map((item, index) => {
                    return index === 0 ? <Heading3Card imgSrc={item.imgSrc} para1={item.para1} para2={item.para2} para3={item.para3} cardIcon1={<CardIcon1 className='cardContainer3Section2AImg' />} cardDirection="cardContainer3" marginDirection="cardContainer3Section2" /> :
                        <Heading3Card imgSrc={item.imgSrc} para1={item.para1} para2={item.para2} para3={item.para3} cardIcon1={<CardIcon2 className='cardContainer3Section2AImg' />} cardDirection="cardContainer3Reverse" marginDirection="cardContainer3Section2Reverse" />
                })}

            </div>
        </div>
    )
}
