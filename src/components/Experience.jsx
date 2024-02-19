import React from 'react';
import './style/Experience.css'; // Import your CSS file for styling
import './style/Button.css';

const experiences = [
    {
        company: "Capgemini, Pune",
        duration: "Oct 2021 – Present",
        position: "Consultant",
        responsibilities: "Managing end-to-end responsibilities for Frontend development."
      },
      {
        company: "Successive Technologies, Pune",
        duration: "Sept 2019 – Jan 2021",
        position: "Software Developer",
        responsibilities: "Managed end-to-end responsibilities encompassing both Frontend and Backend development."
      },
      {
        company: "Left Right Mind, Pune",
        duration: "Oct 2017 – Mar 2019",
        position: "Software Developer",
        responsibilities: "Managed end-to-end responsibilities encompassing both Frontend and Backend development."
      },
  {
    company: "Techizas Infotech Private Limited, Patna",
    duration: "Aug 2016 – Aug 2017",
    position: "Software Developer",
    responsibilities: "Managed end-to-end responsibilities encompassing both Frontend and Backend development."
  }
 
 
 
];

const Experience = () => {
  return (
    <div className="experience-container">
      {/* <h2>Work Experience</h2><br/> */}
      <button className="moving-button"><h3>Experience</h3></button><br /> <br />
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item fade-in">
          <div className="experience-header">
            <h3>{exp.company}</h3>
            <p>{exp.duration}</p>
          </div>
          <div className="experience-details">
            <p><strong>Position:</strong> {exp.position}</p>
            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
