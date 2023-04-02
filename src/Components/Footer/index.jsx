import React from "react";
import "./index.css";
import FooterCard from "../FooterCard";
import { ReactComponent as TLogo } from "../../images/trelloLogoFooter.svg";

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
      <div className="footerSection1">
        <div className="footerSection1AContainer">
          <div className="footerSection1AImgContainer">
            <TLogo className="footerSection1AImgContent" />
          </div>
          <div className="footerSection1ALinkContainer">
            <a className="footerSection1ALinkContent" href="#">
              <span className="footerSection1ALinkSpan">Login</span>
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
  );
}
