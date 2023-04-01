import React from 'react'
import './index.css'

export default function Heading4Card(props) {
    return (
        <div className="heading4CardContainer">
            <div className="heading4CardContainerImg">
                <img src={props.imgSrc} alt="" className="heading4CardContainerImgStyling" />
            </div>
            <div className="heading4CardContainerPara1Container">
                <p className="heading4CardContainerPara1Content">
                    {props.para1}
                </p>
            </div>
            <div className="heading4CardContainerPara2Container">
                <p className="heading4CardContainerPara2Content">
                    {props.para2}
                </p>
            </div>
            <div className="heading4CardContainerBtnContainer">
                <button className="heading4CardContainerBtn">
                    {props.paraBtn}                </button>
            </div>
        </div>
    )
}
