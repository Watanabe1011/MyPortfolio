import "aos/dist/aos.css";
import React from "react";
import TypeAnimation from "react-type-animation";
import HeroSvg from "../../assets/images/hero.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <main
      className="app__hero"
      id="home"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__hero-container">
        <div className="app__hero-container_text">
          <TypeAnimation
            cursor={false}
            sequence={["Hi, my name is"]}
            wrapper="p"
            repeat={1}
            className="app__hero-title "
          />
          <TypeAnimation
            cursor={false}
            sequence={[3000, "Hiroshi Watanabe"]}
            wrapper="h1"
            repeat={1}
            className="app__hero-container_text-name"
          />

          <TypeAnimation
            cursor={false}
            sequence={[3000, "Enjoy creating stuffs"]}
            wrapper="h2"
            repeat={1}
            className="app__hero-container_text-title"
          />
          <TypeAnimation
            cursor={false}
            sequence={[
              5500,
              "Vue | Nuxt | ROR Developer",
              700,
              "Enjoy learning new technologies",
              1200,
              "Let's learn from each other.",
            ]}
            wrapper="h3"
            repeat={Infinity}
            className="app__hero-container_text-subtitle"
          />
        </div>
        <div className="app__hero-container_image">
          <img src={HeroSvg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
