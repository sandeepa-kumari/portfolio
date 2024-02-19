// FAQs.jsx

import React, { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      heading: 'What services does Sandeepa provide?',
      content: 'Sandeepa provides services in ReactJs development and software training.',
    },
    {
      heading: 'Where is Sandeepa located?',
      content: 'Sandeepa is located in India.',
    },
    {
      heading: 'What is the duration of the software training courses?',
      content: 'The duration of the software training courses varies depending on the specific course. Please refer to the course details for more information.',
    },
    {
      heading: 'Are the software training courses available online?',
      content: 'Yes, Sandeepa offers online software training courses for remote learners.',
    },
    {
      heading: 'Do I need any prior experience to enroll in the ReactJs development course?',
      content: 'No, the ReactJs development course is suitable for beginners. However, basic programming knowledge would be beneficial.',
    },
    {
      heading: 'How can I contact Sandeepa for further inquiries?',
      content: 'You can contact Sandeepa by phone at +91-XXXXX-XXXXX or by email at info@sandeepa.com.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Frequently Asked Questions</h1>
      <br/>
      {faqData.map((item, index) => (
        <div key={index} style={faqCardStyle}>
          <div onClick={() => handleToggle(index)} style={faqHeadingStyle}>
            <h3>{item.heading}</h3>
            <span>{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && (
            <div style={faqContentStyle}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const faqCardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  marginBottom: '10px',
};

const faqHeadingStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '15px',
  cursor: 'pointer',
  borderBottom: '1px solid #ddd',
};

const faqContentStyle = {
  padding: '15px',
};

export default FAQs;
