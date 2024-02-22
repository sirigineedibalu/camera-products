import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Courosual.css";

export const Courosual = () => {
  const sliderSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots",
  };
  return (
    <Slider {...sliderSettings}>
      <div className="carousel-container">
        <img
          style={{ width: "100%", height: "100%" }}
          src="Images/cctv 2.jpg"
          alt=""
        />
      </div>
      <div className="carousel-container">
        <img
          style={{ width: "100%", height: "100%" }}
          src="Images/cctv 3.jpg"
          alt=""
        />
      </div>
      <div className="carousel-container">
        <img
          style={{ width: "100%", height: "100%" }}
          src="Images/Capture.JPG"
          alt=""
        />
      </div>
    </Slider>
  );
};
