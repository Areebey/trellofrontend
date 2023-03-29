import React from 'react'
import './index.css'
import { ReactComponent as CardIcon1 } from '../../images/cardicon1.svg'

export default function Heading3Card() {
    return (
        <div className='cardContainer3'>
            <div className="cardContainer3Section1">
                <div className="cardContainer3Section1ImgContainer">

                    <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6mSpThW5HS89/f5683a167ad3f74bed4dc7592ae5a002/TrelloBoard_Timeline_2x.png?w=1080" alt="" className="cardContainer3Section1Img" />
                </div>
            </div>
            <div className="cardContainer3Section2">
                <div className="cardContainer3Section2A">
                    <div className="cardContainer3Section2AImgContainer">
                        <CardIcon1 className='cardContainer3Section2AImg' />
                    </div>
                    <div className="cardContainer3Section2AParaContainer">
                        <p className="cardContainer3Section2AParaContent">
                            HIT DEADLINES EVERY TIME
                        </p>
                    </div>
                </div>
                <div className="cardContainer3Section2B">
                    <p className="cardContainer3Section2BPara">From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</p>
                </div>
                <div className="cardContainer3Section2C">
                    <p className="cardContainer3Section2CPara"><a className='cardContainer3Section2CLink'>Learn more about Timeline view</a></p>
                </div>
            </div>
        </div>
    )
}
