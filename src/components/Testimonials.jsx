
// Testimonial.jsx

import React from 'react';

const Testimonial = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      
      <h1>Testimonials</h1>
      <div style={testimonialCardStyle}>
        <h2>Excellent ReactJs Training</h2>
        <p>
          I had a great experience with Sandeepa's ReactJs training. The trainer was highly knowledgeable
          and provided in-depth explanations. The course material was well-structured and easy to understand.
          I highly recommend Sandeepa for anyone looking to learn ReactJs.
        </p>
        <p><strong>Name:</strong> John Doe</p>
      </div>

      {/* Testimonial 2 */}
      <div style={testimonialCardStyle}>
        <h2>Top-notch Software Training</h2>
        <p>
          I attended Sandeepa's software training program and it was amazing. The trainer had a deep
          understanding of various software development concepts and technologies. The hands-on exercises
          and real-world examples helped me enhance my skills. I'm grateful for the valuable knowledge gained
          from Sandeepa.
        </p>
        <p><strong>Name:</strong> Jane Smith</p>
      </div>

      {/* Testimonial 3 */}
      <div style={testimonialCardStyle}>
        <h2>Highly Professional Services</h2>
        <p>
          Sandeepa provided us with highly professional services for our ReactJs project. Their team was skilled,
          efficient, and delivered the project on time. The communication throughout the project was excellent, and
          they were always available to address our queries. I would definitely recommend Sandeepa for any software
          development needs.
        </p>
        <p><strong>Name:</strong> [Client Name]</p>
      </div>
    </div>
  );
};

const testimonialCardStyle = {
  flex: 1,
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '50px',
  maxWidth: '400px',
};

export default Testimonial;
