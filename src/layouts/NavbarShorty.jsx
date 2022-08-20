import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap' 
import { Outlet, Link } from 'react-router-dom'
import logoImg from '../images/soloLogo.png'

const NavbarShorty = () => {
  return (
    <>
        <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/home"><img alt='Logo' src={logoImg} width="70" height="70"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <section>
    <Outlet></Outlet>
  </section>
    </>
  )
}

export default NavbarShorty