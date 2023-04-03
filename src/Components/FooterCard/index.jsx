import React from "react";
import "./index.css";
export default function FooterCard(props) {
  return (
    <div className="footerCardContainer">
      <div className="footerHeadingContainer">
        <p className="footerHeadingContent">{props.cardHead}</p>
      </div>
      <div className="footerParaContainer">
        <p className="footerParaContent">{props.cardPara}</p>
      </div>
    </div>
  );
}
