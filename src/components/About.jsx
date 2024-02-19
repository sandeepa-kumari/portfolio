
import React from 'react';
import './style/About.css';
import './style/Button.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Text Content */}
      <div className="about-text">
        {/* <h1>About </h1> */}
        <button className="moving-button"><h3>About</h3></button> <br /> <br />
        <p>
          Experienced Software Developer with 6 years in the industry, proficient in ReactJS, TypeScript, Redux and Frontend Technologies.

          <br />
          Dedicated to fostering continuous learning and innovation, with a demonstrated track record of delivering robust solutions and achieving impactful results.
        </p>
      </div>

      {/* Image */}
      <div className="about-image">
        <img
          // src="./images/pic.jpeg"
          src={`${process.env.PUBLIC_URL}/images/pic.jpeg`}
          alt="Profile-Pic"
          className="about-img"
        />
      </div>
    </div>
  );
};

export default About;

