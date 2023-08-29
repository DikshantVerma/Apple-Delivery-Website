import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageSlider.css"; // You can create your own styles

const ImageSlider = ({ images }) => {
  return (
    <Carousel>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
