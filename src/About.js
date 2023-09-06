import React from "react";
import "./About.css";
import logo from "./assests/IMG-20230906-144758-234.jpg";
import appleImage from "./assests/IMG20230728102519-02.jpg";

function About() {
  return (
    <div className="about">
      <img src={logo} alt="" />
      <h2>🍏 Harvesting Dreams: Shimla's Apple Alchemists 🏔️</h2>
      <div className="about__description">
        <p>
          In the picturesque town of Shimla, nestled amidst the breathtaking
          Himalayan mountains, three visionary individuals embarked on a
          remarkable journey to connect the bounties of their apple orchards
          with homes across India. Inspired by the pristine beauty of their
          surroundings and a deep-rooted passion for agriculture, they decided
          to create a website that would revolutionize the way apples reached
          consumers nationwide. With unwavering dedication and a shared
          commitment to preserving the authenticity of Shimla's renowned apples,
          they meticulously curated their produce and launched the website,
          "HimalayanHarvest.in." This digital platform seamlessly bridged the
          gap between their orchards and apple enthusiasts across India,
          ensuring that the freshest, juiciest apples made their way from
          Shimla's pristine farms to doorsteps nationwide, redefining the
          apple-buying experience for all.
        </p>
        <img src={appleImage} alt />
      </div>
    </div>
  );
}

export default About;
