import React, { useState } from "react";
import { Card, Nav, Row, Col, Container, Button } from "react-bootstrap";
import { SwitchTransition, CSSTransition } from "react-transition-group";

//vehicules photos
import dronePhoto from "../../../../assets/img/jpeg/dronePhoto.jpeg";
import roboboatCompetition from "../../../../assets/img/png/roboboat-logo.png";
import roboboatPhoto from "../../../../assets/img/jpeg/roboboatPhoto.jpg";
import robosubPhoto from "../../../../assets/img/jpeg/robosubPhoto.jpeg";
import sdvPhoto from "../../../../assets/img/jpeg/sdvPhoto.jpeg";

import "./RoboBoatProject.scss";

export default function RoboBoatProject() {
  const [vehiculeToShow, setVehiculeToShow] = useState("1");

  return (
    <>
      {/* ABOUT ROBOBOAT COMPETITION */}
      <Row>
        <Card style={{borderColor:"transparent"}}>
          <Card.Body>
            <Row className="mission-vision-data">
              <Col xs={12} md={6} className="mission-vision-data-col">
                <Card.Title>
                  <h2>About International RoboBoat Competition</h2>
                </Card.Title>
                <Card.Text>
                  <p>
                    International RoboBoat Competition is a competition that
                    invites participants to tackle simplified versions of
                    challenges facing the modern maritime industry.
                  </p>{" "}
                  <p>
                    Vanttec started participating in this competition since 2016
                    and this year, the competition is a little different because
                    it is held online.
                  </p>
                  <Button href="https://roboboat.org/programs/2022/">
                    Learn More
                  </Button>
                </Card.Text>
              </Col>
              <Col xs={12} md={6}>
                <Card.Img src={roboboatCompetition} alt="vision" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      {/* SPECS ROBOBOAT COMPETITION */}
      <Row className="hover-effect">
        <Row className="project-header">
          <h2>Specs</h2>
        </Row>
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
              <Nav.Item className="vehicule-item">
                <Nav.Link eventKey={1}>Mechanical</Nav.Link>
              </Nav.Item>
              <Nav.Item className="vehicule-item">
                <Nav.Link eventKey={2}>Software</Nav.Link>
              </Nav.Item>
              <Nav.Item className="vehicule-item">
                <Nav.Link eventKey={3}>Components</Nav.Link>
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
                classNames="fade"
              >
                <div>
                  {vehiculeToShow === "1" ? (
                    <RoboBoatMechanicalCard />
                  ) : vehiculeToShow === "2" ? (
                    <RoboBoatSoftwareCard />
                  ) : (
                    <RoboBoatComponentsCard />
                  )}
                </div>
              </CSSTransition>
            </SwitchTransition>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}

function RoboBoatMechanicalCard() {
  return (
    <Row className="projects-card-row">
      <Col xs={12} md={6}>
        <Card className="project-card">
          <Card.Img src={roboboatPhoto} alt="roboboat" />
        </Card>
      </Col>
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="project-data-stats">
          <ul>
            <li> Length: 1 m</li>
            <li>Beam: 0.75 m</li>
            <li>Mass: 30 kg</li>
            <li>Maximum Thrust: 73</li>
          </ul>
        </Row>
      </Col>
    </Row>
  );
}

function RoboBoatSoftwareCard() {
    return (
      <Row className="projects-card-row">
        <Col xs={12} md={6}>
            <Card className="project-card">
              <Card.Img src={roboboatPhoto} alt="roboboat" />
            </Card>
        </Col>
        <Col xs={12} md={6} className="vehicule-data">
          <Row className="vehicule-data-stats">
            <h2>Autonomous Boat for International Competitions</h2>
            <p>
              Conquers the Surface by Perceiving Objects Around Him, Maneuvers
              Around Obstacles, Resists Weather Disturbances, and has Waypoint
              Navigation
            </p>
          </Row>
          <Row className="vehicule-data-button">
            <Button href="/vehicules">Learn More</Button>
          </Row>
        </Col>
      </Row>
    );
  }
  function RoboBoatComponentsCard() {
    return (
      <Row className="projects-card-row">
        <Col xs={12} md={6}>
            <Card className="project-card">
              <Card.Img src={roboboatPhoto} alt="roboboat" />
            </Card>
        </Col>
        <Col xs={12} md={6} className="vehicule-data">
          <Row className="vehicule-data-stats">
            <h2>Autonomous Boat for International Competitions</h2>
            <p>
              Conquers the Surface by Perceiving Objects Around Him, Maneuvers
              Around Obstacles, Resists Weather Disturbances, and has Waypoint
              Navigation
            </p>
          </Row>
          <Row className="vehicule-data-button">
            <Button href="/vehicules">Learn More</Button>
          </Row>
        </Col>
      </Row>
    );
  }
