import React, { useState } from "react";
import { Card, Nav, Row, Col, Container, Button } from "react-bootstrap";
import {SwitchTransition ,CSSTransition} from 'react-transition-group';
import RoboBoatProject from "../RoboBoatProject/RoboBoatProject";


//vehicules photos
import dronePhoto from "../../../../assets/img/jpeg/dronePhoto.jpeg";
import robosubPhoto from "../../../../assets/img/jpeg/robosubPhoto.jpeg";
import sdvPhoto from "../../../../assets/img/jpeg/sdvPhoto.jpeg";

import "./ProjectsNav.scss";


export default function ProjectsNav() {
  const [vehiculeToShow, setVehiculeToShow] = useState("1");

  return (
      <Container fluid style={{display:"flex", flexDirection:"column", alignItems:"center"}} className="hover-effect">
          <Row className="home-header">
              <h2>Main Projects</h2>
          </Row>
        <Row>
          <Card
            className="projects-card"
            style={{ backgroundColor: "transparent" }}
          >
            <Card.Header>
              <Nav
                variant="pills"
                justify
                defaultActiveKey={vehiculeToShow}
                activeKey={vehiculeToShow}
                onSelect={(selectedKey) => {
                  setVehiculeToShow(selectedKey);
                }}
              >
                <Nav.Item className="project-item">
                  <Nav.Link eventKey={1}>RoboBoat Competition</Nav.Link>
                </Nav.Item>
                <Nav.Item className="project-item">
                  <Nav.Link eventKey={2}>RoboSub Competition</Nav.Link>
                </Nav.Item>
                <Nav.Item className="project-item">
                  <Nav.Link eventKey={3}>Autonomous Car</Nav.Link>
                </Nav.Item>
                <Nav.Item className="project-item">
                  <Nav.Link eventKey={4}>Drone</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>

            <Card.Body className="projects-card-body">
            <SwitchTransition mode={"out-in"}>
            <CSSTransition
            key={vehiculeToShow}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="my-node"
          >
    
              <div>
              {vehiculeToShow === "1" ? (
                <RoboBoatProject />
              ) : vehiculeToShow === "2" ? (
                <RoboSubCard />
              ) : vehiculeToShow === "3" ? (
                <SDV />
              ) : (
                <DroneCard />
              )}
              </div>
              </CSSTransition>
              </SwitchTransition>
            </Card.Body>
          </Card>
        </Row>
      </Container>
  );
}



function RoboSubCard() {
  return (
    <Row className="vehicules-card-row">
      <h1>Coming Soon...</h1>
    </Row>
  );
}

function DroneCard() {
  return (
    <Row className="vehicules-card-row">
    <h1>Coming Soon...</h1>
  </Row>
  );
}
function SDV() {
  return (
    <Row className="vehicules-card-row">
    <h1>Coming Soon...</h1>
  </Row>
  );
}
