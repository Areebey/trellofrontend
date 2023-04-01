import React from 'react'
import './index.css'

export default function Heading3Card(props) {
    return (
        <div className={props.cardDirection}>
            <div className="cardContainer3Section1">
                <div className="cardContainer3Section1ImgContainer">

                    <img src={props.imgSrc} alt="" className="cardContainer3Section1Img" />
                </div>
            </div>
            <div className={props.marginDirection}>
                <div className="cardContainer3Section2A">
                    <div className="cardContainer3Section2AImgContainer">
                        {props.cardIcon1}
                    </div>
                    <div className="cardContainer3Section2AParaContainer">
                        <p className="cardContainer3Section2AParaContent">
                            {props.para1}
                        </p>
                    </div>
                </div>
                <div className="cardContainer3Section2B">
                    <p className="cardContainer3Section2BPara">{props.para2}</p>
                </div>
                <div className="cardContainer3Section2C">
                    <p className="cardContainer3Section2CPara"><a className='cardContainer3Section2CLink'>{props.para3}</a></p>
                </div>
            </div>
        </div>
    )
}
