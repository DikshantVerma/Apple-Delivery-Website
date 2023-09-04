import React from "react";
import "./App.css";
import UtilityBar from "./UtilityBar";
import Footer from "./Footer";
import FooterCopyright from "./FooterCopyright";

function App() {
  const images = ["https://unsplash.com/photos/ukzHlkoz1IE"];
  return (
    <div className="App">
      <UtilityBar />
      <Footer />
      <FooterCopyright />
      {/* The rest of your app */}
    </div>
  );
}

export default App;
