import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
            Hello! My name is Hiroshi and I am a front end developer with a passion
            for creating visually stunning and intuitive websites. With a strong
            foundation in HTML, CSS, and JavaScript, I am able to bring designs
            to life and create user experiences that are both functional and
            enjoyable. I have a keen eye for detail and am always seeking ways
            to improve the performance and functionality of a website. Outside
            of work, I enjoy staying up-to-date on the latest web development
            trends and techniques through online learning. I am always looking
            for new challenges and opportunities to expand my skillset.
          </p>
          <p>
            I spend my time learning on technology especially Frontend
            Development I consistently learn the concepts and tools behind and
            building projects around it.
          </p>

          <p>
            I'm currently work as a Front End Developer at{" "}
            <a
              href="https://nexplay.gg/"
              target="_blank"
              className="app__links"
            >
              Nexplay
            </a>
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
