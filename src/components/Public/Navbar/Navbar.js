import React, { useState } from "react";
import {Container, Offcanvas, Nav, Form, FormControl, Button, Navbar as NavbarBootstrap } from "react-bootstrap";

import './Navbar.scss'

function Navbar() {

  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY < 57 && window.innerWidth > 750){
      setNavBar(false);
    }else{
      setNavBar(true);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
        <NavbarBootstrap  fixed="top" key={"md"} bg={navbar ? "dark" : ""} expand={"lg"} className="mb-0">
          <Container fluid>
            <NavbarBootstrap.Brand href="/">VANTTEC LOGO</NavbarBootstrap.Brand>
            <NavbarBootstrap.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <NavbarBootstrap.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    <a href="/home">LOGO VANTTEC</a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/team">Team</Nav.Link>
                  <Nav.Link href="/vehicules">Vehicules</Nav.Link>
                  <Nav.Link href="/research">Research</Nav.Link>
                  <Nav.Link href="/sponsors">Sponsors</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary">Search</Button>
                </Form>
              </Offcanvas.Body>
            </NavbarBootstrap.Offcanvas>
          </Container>
        </NavbarBootstrap>
    </>
  );
}

export default Navbar;
