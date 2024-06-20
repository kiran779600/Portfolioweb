import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AppBar position="fixed" className="app-bar" elevation={0} style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 0, fontWeight: 'bold' }}>
          My Portfolio
        </Typography>
        <Button component={RouterLink} to="/" color="inherit" onClick={scrollToTop} style={{marginLeft:'750px'}}>
          Home
        </Button>
        <ScrollLink to="aboutMe" spy={true} smooth={true} duration={500}>
          <Button color="inherit">
            About
          </Button>
        </ScrollLink>
        <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
          <Button color="inherit">
            Projects
          </Button>
        </ScrollLink>
        <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
          <Button color="inherit">
            Contact
          </Button>
        </ScrollLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
