import React from "react";
import "./About.css";
import logo from "./assests/IMG-20230906-144758-234.jpg";
import appleImage from "./assests/IMG20230728102519-02.jpg";
import himachalApples from "./assests/IMG-20230906-144633-987.jpg";

function About() {
  return (
    <div className="about">
      <img src={logo} alt="" />
      <h2>🍏 Harvesting Dreams: Shimla's Apple Alchemists 🏔️</h2>
      <h3>About Us</h3>
      <div className="about__description">
        <p>
          In the picturesque town of Shimla, nestled amidst the breathtaking
          Himalayan mountains, three visionary individuals embarked on a
          remarkable journey to connect the bounties of their apple orchards
          with homes across India. Inspired by the pristine beauty of their
          surroundings and a deep-rooted passion for agriculture, they decided
          to create a website that would revolutionize the way apples reached
          consumers nationwide.
          <br />
          <br /> With unwavering dedication and a shared commitment to
          preserving the authenticity of Shimla's renowned apples, we
          meticulously curated our produce and launched the website,{" "}
          <a href="www.himalayanharvest.in">HimalayanHarvest.in</a>.<br />{" "}
          <br />
          Driven by an insatiable love for agriculture, we recognized the
          immense potential of our apple orchards and felt a deep calling to
          share the fruits of our labor with a wider audience. It was in this
          very town, where every season brought a new shade of wonder to the
          mountains, that we envisioned a means to bring Shimla's most exquisite
          apples directly to the homes of eager consumers across India. <br />
          <br />
          As the digital platform blossomed, it brought together producers and
          consumers in a harmonious dance of supply and demand, connecting urban
          dwellers with the rural heartlands. The scent of Shimla's apples
          wafted into kitchens across the country, becoming an integral part of
          celebrations, gatherings, and daily life. The apple-buying experience
          was no longer just transactional; it was a connection to a story, a
          place, and a shared appreciation for nature's bounty.
          <br />
          <br />
          In a world where technology often isolates,{" "}
          <a href="www.himalayanharvest.in">HimalayanHarvest.in</a> managed to
          do the opposite. It united people from diverse backgrounds under the
          banner of a common love for the crisp, succulent apples nurtured by
          the Himalayas. In this digital age, we have not just created a
          website; we have crafted a unique narrative that brought Shimla's
          apple orchards closer to the hearts of millions, transforming our
          passion into a profound and shared experience.
        </p>
        <img src={appleImage} alt />
      </div>

      <div className="about__heading">
        <h1>Founders</h1>
      </div>
      <div className="row__1">
        <img src={himachalApples} alt="" />
        <img src={appleImage} alt="" />
      </div>
    </div>
  );
}

export default About;
