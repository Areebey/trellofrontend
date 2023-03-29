import React from 'react'
import './index.css'
import Heading3Card from '../Heading3Card'

export default function Heading3() {
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
<Heading3Card />
            </div>
        </div>
    )
}
