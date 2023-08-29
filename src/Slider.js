import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return React.createElement(
    "div",
    { className: "slider-container" },
    React.createElement(
      Slider,
      settings,
      React.createElement("div", { className: "slider-item" }, "Slide 1"),
      React.createElement("div", { className: "slider-item" }, "Slide 2"),
      React.createElement("div", { className: "slider-item" }, "Slide 3")
      // Add more slides as needed using React.createElement
    )
  );
};

export default SliderComponent;
