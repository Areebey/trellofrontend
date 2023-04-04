import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../images/slider1.PNG"
import slider2 from "../../images/slider2.PNG"
import slider3 from "../../images/slider3.PNG"


function Carousal() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;