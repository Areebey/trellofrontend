import React from "react";
import './index.css'

export default function UserSection() {
  return (
    <div className="userSectionContainer">
      <div className="userSectionHeadingContainer">
        <p className="userSectionHeadingContent">
        Join over 2,000,000 teams worldwide that are using Trello to get more done.
        </p>
      </div>
      <div className="userSectionImgContainer">
        <img
          src="https://images.ctfassets.net/rz1oowkt5gyp/19rAABnbk8KNNuh3zJzsmr/210fb8ee51dea14595462f844b7c9beb/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg"
          alt=""
          className="userSectionImgContent"
        />
      </div>
    </div>
  );
}
