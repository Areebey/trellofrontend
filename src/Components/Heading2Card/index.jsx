import React from 'react'
import './index.css'

export default function Heading2Card(props) {
    return (
        <>
            <div className= {props.selectedCard} onClick={props.cardFunc}>
                <div className="contentContainer2Section2ACardHeadContainer">
                    <p className="contentContainer2Section2ACardHeadContent">
                        {props.heading}
                    </p>
                </div>
                <div className="contentContainer2Section2ACardParaContainer">
                    <p className="contentContainer2Section2ACardParaContent">
                        {props.para}
                    </p>
                </div>
                <div className={props.cardCoverStyle}></div>
            </div>
        </>


    )
}
