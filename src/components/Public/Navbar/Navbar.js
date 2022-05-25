import React, { useState } from "react";
import {Container, Offcanvas, Nav, Form, FormControl, Button, Navbar as NavbarBootstrap } from "react-bootstrap";

//Logo
import logoVanttec from "../../../assets/img/png/LogoAzul_Negro.png";
import logoVanttecWhite from "../../../assets/img/png/LogoBlanco_Blanco.png";

import './Navbar.scss'

function Navbar() {

  const [navbar, setNavBar] = useState(false);
  const [top, setTop] = useState("dark");
  const [logo, setLogo] = useState(logoVanttecWhite)

  const changeBackground = () => {
    if(window.scrollY < 57 && window.innerWidth > 912){
      setNavBar(false);
      setTop("dark");
      setLogo(logoVanttecWhite);
    }else{
      setNavBar(true);
      setTop("light");
      setLogo(logoVanttec);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
        <NavbarBootstrap variant={top}  fixed="top" key={"md"} bg={navbar ? "light" : ""} expand={"lg"} className="mb-0">
          <Container fluid>
            <NavbarBootstrap.Brand href="/"><img className="logo-navbar" src={logo} alt="Vanttec logo"/></NavbarBootstrap.Brand>
            <NavbarBootstrap.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <NavbarBootstrap.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    <a href="/home"><img className="logo-navbar" src={logoVanttec} alt="Vanttec logo"/></a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  {/* <Nav.Link href="/team">Team</Nav.Link> */}
                  <Nav.Link href="/projects">Projects</Nav.Link>
                  {/* <Nav.Link href="/research">Research</Nav.Link> */}
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </NavbarBootstrap.Offcanvas>
          </Container>
        </NavbarBootstrap>
    </>
  );
}

export default Navbar;
