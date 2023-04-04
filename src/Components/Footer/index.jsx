import React from "react";
import "./index.css";
import FooterCard from "../FooterCard";
import { ReactComponent as TLogo } from "../../images/trelloLogoFooter.svg";
import { ReactComponent as Instagram } from "../../images/instagramLogo.svg";
import { ReactComponent as Facebook } from "../../images/facebookLogo.svg";
  import { ReactComponent as Linkedin } from "../../images/linkedinLogo.svg";
import { ReactComponent as Twitter } from "../../images/twitterLogo.svg";
import { ReactComponent as Youtube } from "../../images/youtubeLogo.svg";

export default function Footer() {
  const footerItems = [
    { cardHead: `About Trello`, cardPara: `What’s behind the boards.` },
    {
      cardHead: `Jobs`,
      cardPara: `Learn about open roles on the Trello team.`,
    },
    {
      cardHead: `Apps`,
      cardPara: `Download the Trello App for your Desktop or Mobile devices.`,
    },
    {
      cardHead: `Contact us`,
      cardPara: `Need anything? Get in touch and we can help.`,
    },
  ];
  return (

    <div className="footerContainer">
      <div className="footerSectionA">
        <div className="footerSection1">
          <div className="footerSection1AContainer">
            <div className="footerSection1AImgContainer">
              <TLogo className="footerSection1AImgContent" />
            </div>
            <div className="footerSection1ALinkContainer">
              <a className="footerSection1ALinkContent" href="#">
                <span className="footerSection1ALinkSpan">Log In</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footerSection2">
          {footerItems.map((item) => {
            return (
              <FooterCard cardHead={item.cardHead} cardPara={item.cardPara} />
            );
          })}
        </div>
      </div>
      <div className="footerSectionB">
        <hr style={{ color: 'white', width: '68em' }} />
        <div className="footerContainer2">
          <div className="footerContainer2Section1">
            <div className="footerContainer2Section1ImgContainer">

              <img className="footerContainer2Section1ImgContent" src="data:image/svg+xml,%3Csvg fill='%23ffffff' width='25px' height='24px' viewBox='0 0 25 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath d='M2.33514634,13.0909091 C2.80456741,17.1674997 5.87382928,20.4918664 9.91593939,21.5020963 C8.18760918,19.0069673 7.13798566,16.119686 6.87807529,13.0909091 L2.33514634,13.0909091 Z M2.33514634,10.9090909 L6.8751035,10.9090909 C7.12988231,7.89470494 8.18079774,5.00118821 9.91557751,2.49799419 C5.87364609,3.50833206 2.8045534,6.83262197 2.33514634,10.9090909 Z M22.6648537,10.9090909 C22.1954326,6.83250032 19.1261707,3.50813364 15.0840606,2.49790374 C16.8123908,4.99303266 17.8620143,7.88031403 18.1219247,10.9090909 L22.6648537,10.9090909 Z M22.6648537,13.0909091 L18.1248965,13.0909091 C17.8701177,16.1052951 16.8192023,18.9988118 15.0844225,21.5020058 C19.1263539,20.4916679 22.1954466,17.167378 22.6648537,13.0909091 Z M9.15315078,10.9090909 L15.843646,10.9090909 C15.5581939,7.94925479 14.3973512,5.12935736 12.4999751,2.78265622 C10.595448,5.13778492 9.43302782,7.96652031 9.15315078,10.9090909 Z M15.8468492,13.0909091 L9.15635402,13.0909091 C9.44180608,16.0507452 10.6026488,18.8706426 12.5000249,21.2173438 C14.404552,18.8622151 15.5669722,16.0334797 15.8468492,13.0909091 Z M12.5,24 C5.59644063,24 0,18.627417 0,12 C0,5.372583 5.59644063,0 12.5,0 C19.4035594,0 25,5.372583 25,12 C25,18.627417 19.4035594,24 12.5,24 Z' %3E%3C/path%3E%3C/svg%3E%0A" alt="" />
            </div>
            <div className="footerContainer2Section1ParaContainer">
              <p className="footerContainer2Section1ParaContent">English</p>
            </div>
          </div>
          <div className="footerContainer2Section2">
            <div className="section2ParaContainer">
              <p className="section2ParaContent">Privacy Policy</p>
            </div>
            <div className="section2ParaContainer">
              <p className="section2ParaContent">Terms</p>
            </div>
            <div className="section2ParaContainer">
              <p className="section2ParaContent">Cookie Settings</p>
            </div>
            <div className="section2ParaContainer">
              <p className="section2ParaContent">
                Copyright © 2023 Atlassian</p>
            </div>
          </div>
          <div className="footerContainer2Section3">
            <div className="footerContainer2Section3ImgContainer">
              <Instagram />
            </div>
            <div className="footerContainer2Section3ImgContainer">
              <Facebook />
            </div>
            <div className="footerContainer2Section3ImgContainer">
              <Linkedin />
            </div>
            <div className="footerContainer2Section3ImgContainer">
              <Twitter />
            </div>
            <div className="footerContainer2Section3ImgContainer">
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
