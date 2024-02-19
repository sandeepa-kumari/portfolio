
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Project';
import './App.css';

import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="work_experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* <section id="services">
          <Services />
        </section> */}
        {/* <section id="work">
          <WorkWithMe />
        </section> */}
        {/* <section id="testimonials">
          <Testimonials />
        </section> */}
        {/* <section id="FAQs">
          <FAQs />
        </section> */}
        <section id="contact">
          <Contact /> 
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

