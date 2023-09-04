import React from "react";
import "./App.css";
import UtilityBar from "./UtilityBar";
import Footer from "./Footer";

function App() {
  const images = ["https://unsplash.com/photos/ukzHlkoz1IE"];
  return (
    <div className="App">
      <UtilityBar />
      <Footer />
      {/* The rest of your app */}
    </div>
  );
}

export default App;
