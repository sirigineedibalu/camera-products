import React from "react";
import "./Courosual.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
// import { BsChat, BsPhone } from "react-icons/bs";

export const Courosual = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    scrollX: true,
    infinite: true,
    speed: 100,
    scroll: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };
  console.log(currentSlide);
  return (
    <>
      <Slider style={{ width: "100%" }} {...settings}>
        <div className="d-flex cls ">
          <img src="images/ccimg.jpg" alt="" className="fig" />
          <div className="header-coursoual-container">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://www.hifocuscctv.com/images/banner/AICAMERAFORWEBSITE.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex cls ">
          <img src="images/html.jpg" alt="" className="fig" />
          <div className="header-coursoual-container">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://www.hifocuscctv.com/images/banner/colorisebanner1.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex cls ">
          <img src="images/img1.jpg" alt="" className="fig" />
          <div className="header-coursoual-container">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://www.hifocuscctv.com/images/slider-bannar-33.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex cls ">
          <img src="images/sales.jpg" alt="" className="fig" />
          <div className="header-coursoual-container">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://www.hifocuscctv.com/images/WhatsAppImage2023-07-31at170108.jpeg"
              alt=""
            />
          </div>
        </div>
        {/* <div className="d-flex cls ">
          <img src="images/webimg.jpg" alt="" className="fig" />
          <div>
            <img
              className="header-coursoual-container"
              src="Images/trinai.png"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex cls ">
          <img src="images/sales.jpg" alt="" className="fig" />
          <div>
            <img
              className="header-coursoual-container"
              src="Images/trinai.png"
              alt=""
            />
          </div>
        </div> */}
      </Slider>
    </>
  );
};
