import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop'; // Correct import

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Element name="home" className="element">
            <Home />
          </Element>
          <Element name="aboutMe" className="element">
            <AboutMe />
          </Element>
          <Element name="projects" className="element">
            <Projects />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
        </main>
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <div className="home-container">
      <div className="home-text">
        <h2 className='home1'>Hello!</h2>
        <h1>I'm a Professional Web Designer &
          <span className='home2'> Full Stack Developer</span>
        </h1>
        <br />
        <span className='homea'>
          It is a long established fact that a reader will be distracted by
          <br />
          the readable content of a page when looking at its layout.
        </span>
        <br />
        <br />
        <button style={{ backgroundColor: 'green', fontWeight: 'bold' }} className="btn btn-primary">Hire Me</button>
        <button style={{ marginLeft: '30px', backgroundColor: 'orange', fontWeight: 'bold' }} className="btn btn-danger">Download CV</button>
      </div>
      <div className="home-image">
        <img src="hero.png" alt="Parallax Effect" />
      </div>
    </div>
  </>
);

export default App;
