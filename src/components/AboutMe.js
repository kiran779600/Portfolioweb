import React from 'react';
import './AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = () => {
  return (
    <div className="about-me-container" id='AboutMe'>
      <div className="about-me-text">
        <h4 className="about-heading">About Me</h4>
        <h3 className="about-subheading">Hello! I'm <span className='about-subheading1'>Kiran Kolte</span>. I'm a Professional Web Designer & Full Stack Developer & <span className='about-subheading1'>Freelancer</span>.</h3>
        <p className='aboutdata'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis, tortor mauris eleifend urna, ut laoreet velit nisi scelerisque ex. Fusce vel pulvinar ligula. Etiam eget dolor leo. Phasellus eu dolor cursus, sodales nunc at, tempor turpis.<br></br><br></br> Morbi ac ante neque. In porttitor imperdiet blandit. Aliquam laoreet rutrum mattis. Pellentesque id ligula et purus tincidunt tempus a nec purus.</p>
      </div>
      
      <div className="about-me-cards">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">599</h5>
            <p className="card-text">Happy Clients</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">2001</h5>
            <p className="card-text">Sales</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">5000</h5>
            <p className="card-text">Project Completed</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">6</h5>
            <p className="card-text">Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
