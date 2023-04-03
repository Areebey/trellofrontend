import React, { Component } from "react";
import Slider from "react-slick";
import prevArrow from './prev-arrow.svg';
import nextArrow from './next-arrow.svg';

const SliderCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };
    
    return (
      <Slider {...settings}>
        <div>
          <img src={image1} alt="image1" />
        </div>
        <div>
          <img src={image2} alt="image2" />
        </div>
        <div>
          <img src={image3} alt="image3" />
        </div>
        <div>
          <img src={image4} alt="image4" />
        </div>
      </Slider>
    );
  };
  
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={prevArrow}
        className={className}
        onClick={onClick}
        alt="prev-arrow"
      />
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={nextArrow}
        className={className}
        onClick={onClick}
        alt="next-arrow"
      />
    );
  };
export default SliderCarousel