import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/hasta_logo.png'

const NavigationBar = () => {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };


  return (
    <Navbar expand="lg" sticky="top" expanded={expanded} style={{ background: 'white' }}>
      <Container>
        {/* Left-Side Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Right-Side Nav Links */}
          <Nav className="mx-auto gap-4">
            <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleLinkClick}>
              Services
            </Nav.Link>
          </Nav>

          <Link to='/contact'>
            <button style={{ background: '#920E0E', color: 'white', borderRadius: '40px', padding: '.5rem 2rem' }}>Contact Us</button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
