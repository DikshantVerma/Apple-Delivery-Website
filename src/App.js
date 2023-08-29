import React from "react";
import "./App.css";
import UtilityBar from "./UtilityBar";
import SliderComponent from "./Slider";

function App() {
  return (
    <div className="App">
      <SliderComponent />
      <UtilityBar />
      {/* The rest of your app */}
    </div>
  );
}

export default App;
