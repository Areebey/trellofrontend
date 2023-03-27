import React from 'react'
import './index.css'
import Heading2Card from '../Heading2Card'
import { useState } from 'react';

export default function Heading2() {
    const selectCardFunc =(index)=>{
        setCardIndex(index)
        
    }
    
    const cardItems = [{ heading: 'Boards', para: `Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”` }, { heading: 'Lists', para: `The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.` }, { heading: 'Cards', para: `Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.` },];
    const [cardIndex, setCardIndex] = useState(0)
    return (
        <div className="contentContainer2">
            <div className="contentContainer2Section1A">
                <div className="contentContainer2Section1PartA">
                    <p className="contentContainer2Section1PartAPara">
                        TRELLO 101
                    </p>
                </div>
                <div className="contentContainer2Section1PartB">
                    <p className="contentContainer2Section1PartBPara">A productivity powerhouse</p>

                </div>
                <div className="contentContainer2Section1PartC">
                    <p className="contentContainer2Section1PartCPara">
                        Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our guide  <a href='#'>for getting started.</a>
                    </p>

                </div>

            </div>
            <div className="contentCotainer2Section2">
                <div className="contentContainer2Section2A">
                    {cardItems.map((item, index) => {
                        return <Heading2Card cardFunc={()=>{selectCardFunc(index)}} heading={item.heading} para={item.para} />
                    })}

                </div>
                <div className="contentContainer2Section2B">
                    <div className="contentContainer2Section2BImgContainer">
                        {cardIndex === 0 && <img className='contentContainer2Section2BImg' src="https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1536&fm=webp" alt="" />}
                        {cardIndex === 1 && <img className='contentContainer2Section2BImg' src="https://images.ctfassets.net/rz1oowkt5gyp/4U0VUZYX2tQmB5KVGxBabp/7321ac088fe8ec39dbe3069c47d7df99/Carousel_Image_Lists_2x.png?w=1536&fm=webp" alt="" />}
                        {cardIndex === 2 && <img className='contentContainer2Section2BImg' src="https://images.ctfassets.net/rz1oowkt5gyp/26CA6JZeRgoOK4nuRHnIlY/060702a80cf7c3be3651d9297d196267/Carousel_Image_Cards_2x.png?w=1536&fm=webp" alt="" />}
                    </div>
                </div>
            </div>

            <div className="contentContainer2Section3">

            </div>
            <div className="contentContainer2Section4">

            </div>
        </div>
    )
}
