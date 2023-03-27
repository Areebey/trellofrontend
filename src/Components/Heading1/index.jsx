import React from 'react'
import './index.css'
import { ReactComponent as Play } from '../../images/play.svg'

export default function Heading1() {
  return (
    <div className='contentContainer1'>
      <div className="contentContainerMainSection">
        <div className='contentContainer1Section1'>
          <div className='contentContainer1Section1A'>
            <p className='contentContainer1Section1APara'>
              Trello brings all your tasks, teammates, and tools together
            </p>
          </div>
          <div className='contentContainer1Section1B'>
            <p className='contentContainer1Section1BPara'>
              Keep everything in the same place—even if your team isn’t.
            </p>
          </div>
          <div className='contentContainer1Section1C'>
            <input className='contentContainer1Section1CInput' type="text" placeholder='Email' />
          </div>
          <div className='contentContainer1Section1D'>
            <button className='contentContainer1Section1DButton'>
              Sign up - it’s free!
            </button>
          </div>
          <div className='contentContainer1Section1E'>
            <a className='contentContainer1Section1ELink' href="#video">Watch video</a>
            <span className='contentContainer1Section1ESpan'>
              <Play />
            </span>
          </div>
        </div>
        <div className='contentContainer1Section2'>
          <img className='contentContainer1Section2Img' src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=960&fm=webp" alt="" />
        </div>
      </div>

    </div>
  )
}
