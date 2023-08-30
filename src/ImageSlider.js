import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button className="prev-button" onClick={prevImage}>
        Previous
      </button>
      <button className="next-button" onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
