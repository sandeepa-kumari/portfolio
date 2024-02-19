import React from 'react';
import './style/Education.css'; 
import './style/Button.css';

const educationDetails = [
  {
    qualification: "Bachelor of Engineering",
    grade: "80% (In Computer Science)",
    institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    year: "2016"
  },
  {
    qualification: "All India Senior School Certificate Examination",
    grade: "68.2% (12th)",
    institute: "Central Board of Secondary Education (CBSE)",
    year: "2011"
  },
  {
    qualification: "All India Senior School Certificate Examination",
    grade: "89.8% (10th)",
    institute: "Central Board of Secondary Education (CBSE)",
    year: "2009"
  }
];

const Education = () => {
  return (
    <div className="education-container">
      {/* <h2>Education</h2><br/> */}
      <button className="moving-button"><h3>Education</h3></button><br /> <br />
      {educationDetails.map((edu, index) => (
        <div key={index} className="education-item fade-in">
          <h3>{edu.qualification}</h3>
          <p><strong>Grade:</strong> {edu.grade}</p>
          <p><strong>Institute:</strong> {edu.institute}</p>
          <p><strong>Year:</strong> {edu.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
