import React from 'react';
import './Project.css';

const Projects = () => {
  const services = [
    { title: "Web Development", description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.", icon: "🌐" },
    { title: "Graphic Design", description: "Quisque euismod est at nibh tincidunt, at auctor leo porta. Aliquam erat volutpat.", icon: "🎨" },
    { title: "SEO Services", description: "Vestibulum ac quam nec odio volutpat interdum a vitae nunc.", icon: "🔍" },
    { title: "Content Writing", description: "Curabitur sit amet metus nec sem faucibus pharetra.", icon: "✍️" },
    { title: "Digital Marketing", description: "Sed consequat risus nec lorem vehicula, sed vulputate lacus hendrerit.", icon: "📈" },
    { title: "App Development", description: "Donec nec lacus ac odio iaculis finibus non vel nisi.", icon: "📱" }
  ];

  return (
    <>
     <h2 className='Project-headding'>Our Services</h2>
      <p className='Project-subheading'>Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet. Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan vulputate.
      Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet. Vivamus sodales Cras dignissim justo eu accumsan vulputate.</p>
    <div className="projects-container">
     
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="services-box">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
