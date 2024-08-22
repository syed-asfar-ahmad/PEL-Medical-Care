import React from "react";

const Hero = ({title, imageUrl}) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          PEL Medical is dedicated to providing exceptional healthcare services exclusively for PEL employees. Our state-of-the-art facility and team of skilled professionals are committed to delivering personalized care tailored to each individual's needs. At PEL Medical, we prioritize your well-being, ensuring a supportive and compassionate journey towards optimal health and wellness. Trust us to be your partner in health, dedicated to enhancing the quality of life for every PEL employee.
        </p>
      </div>

      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image"/>
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>

      </div>

    </div>
  );
};

export default Hero;