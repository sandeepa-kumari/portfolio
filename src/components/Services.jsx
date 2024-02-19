// services.jsx

import React from 'react';

const Services = () => {
  return (
    <div style={{ display: '-webkit-box', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Our Services</h1> 

      {/* React JS Development */}
      <div style={cardStyle}>
        <h2>React JS Development</h2>
        <p>
          We specialize in building interactive and efficient web applications using React JS.
          Our team of experienced developers ensures high-quality and scalable solutions for your projects.
        </p>
      </div>

      {/* ReactJS Consulting */}
      <div style={cardStyle}>
        <h2>ReactJS Consulting</h2>
        <p>
          Need guidance on implementing ReactJS in your project? Our consulting services
          offer expert advice, best practices, and personalized solutions to optimize your React development.
        </p>
      </div>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '50px',
  maxWidth: '400px',
};

export default Services;
