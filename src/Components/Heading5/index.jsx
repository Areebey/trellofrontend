import React from "react";
import "./index.css";

export default function Heading5() {
  return (
    <div className="heading5Container">
      <div className="heading5Section1Container">
        <div className="heading5Section1ImgContainer">
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/6Q4l8SJeMZGSu1m6W9vAjL/1021a10f6940ce44c50d0ffaefec223e/BigSwingFooterHeroGraphic__Left.svg"
            alt=""
            className="heading5Section1ImgContent"
          />
        </div>
      </div>
      <div className="heading5Section2Container">
        <div className="heading5Section2HeadingContainer">
          <p className="heading5Section2HeadingContent">
            Get started with Trello today
          </p>
        </div>


        <div className="heading5Section2AContainer">

          <div className="heading5Section2InputContainer">
            <input type="text" placeholder='Email' className="heading5Section2InputContent" />
          </div>
          <div className="heading5Section2BtnContainer">
            <button className="heading5Section2BtnContent">
              Sign up - it’s free!
            </button>
          </div>
        </div>

      </div>
      <div className="heading5Section3Container">
        <div className="heading5Section3ImgContainer">
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/7KsuX6srvRqJVzeAIdIzIb/da1a3319c278d251ecbd078fcffdcd23/BigSwingFooterHeroGraphic__Right.svg"
            alt=""
            className="heading5Section3ImgContent"
          />
        </div>
      </div>
    </div>
  );
}
