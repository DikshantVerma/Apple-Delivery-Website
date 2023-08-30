import React from "react";
import "./App.css";
import UtilityBar from "./UtilityBar";
import SliderComponent from "./Slider";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";

function App() {
  const images = ["https://unsplash.com/photos/ukzHlkoz1IE"];
  return (
    <div className="App">
      <SliderComponent />
      <UtilityBar />
      <ImageSlider images={images} />
      {/* The rest of your app */}
    </div>
  );
}

export default App;
