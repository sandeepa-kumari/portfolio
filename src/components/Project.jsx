import React from 'react';
import './style/Project.css'; 
import './style/Button.css';

const projects = [
  {
    title: "Client Workflow Hub",
    role: "Development",
    teamSize: 7,
    languages: "ReactJS, Node.js and MongoDB",
    description: "This project includes managing campaign data for various clients. Each campaign will have various stages along with details like status, app reference, and a person associated with it to track its progress."

  },
  {
    title: "Traq",
    client: "L&T Construction",
    role: "Development",
    teamSize: 3,
    languages: "PHP, Couchbase, JavaScript, HTMl, CSS, Node.js and MongoDB",
    description: "To provide the customers a hassle-free construction experience. L&T Construction got 2 Awards for digitalized construction process because of Traq Website and Mobile App."
  }
];

const Projects = () => {
  return (
    <div className="project-container">
      {/* <h2>Project Details</h2><br/> */}
      <button className="moving-button"><h3>Projects</h3></button><br /> <br />
      {projects.map((project, index) => (
        <div key={index} className="project-item fade-in">
          <h3>{project.title}</h3> <br/>
          {project.client && <p><strong>Client:</strong> {project.client}</p>}
          <p><strong>Role:</strong> {project.role}</p>
          <p><strong>Team Size:</strong> {project.teamSize}</p>
          <p><strong>Languages:</strong> {project.languages}</p>
          <p><strong>Description:</strong> {project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
