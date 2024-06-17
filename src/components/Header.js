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
        <Button component={RouterLink} to="/" color="inherit" onClick={scrollToTop}>
          Home
        </Button>
        <Button component={ScrollLink} to="AboutMe" spy={true} smooth={true} duration={500} color="inherit">
          About
        </Button>
        <Button component={ScrollLink} to="Projects" spy={true} smooth={true} duration={500} color="inherit">
          Projects
        </Button>
        <Button component={ScrollLink} to="Contact" spy={true} smooth={true} duration={500} color="inherit">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
