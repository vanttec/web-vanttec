import React, { useState } from "react";
import { Card, Nav, Row, Col, Container, Button } from "react-bootstrap";
import {SwitchTransition ,CSSTransition} from 'react-transition-group';


//vehicules photos
import dronePhoto from "../../../../assets/img/jpeg/dronePhoto.jpeg";
// import roboboatPhoto from "../../../../assets/img/jpg/roboBoatMain.jpeg";
import robosubPhoto from "../../../../assets/img/jpeg/robosubPhoto.jpeg";
import sdvPhoto from "../../../../assets/img/jpeg/sdvPhoto.jpeg";

import "./MainVehiculesCard.scss";


export default function MainVehiculesCard() {
  const [vehiculeToShow, setVehiculeToShow] = useState("1");
  const [state, setState] = React.useState(true);

  return (
      <Container fluid style={{display:"flex", flexDirection:"column", alignItems:"center"}} className="hover-effect">
        <Row className="home-header">
          <h2>Main Projects</h2>
        </Row>
        <Row>
        
          <Card
            className="vehicules-card"
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
                  <Nav.Link eventKey={1}>RoboBoat Competition</Nav.Link>
                </Nav.Item>
                <Nav.Item className="vehicule-item">
                  <Nav.Link eventKey={2}>RoboSub Competition</Nav.Link>
                </Nav.Item>
                <Nav.Item className="vehicule-item">
                  <Nav.Link eventKey={3}>Autonomous Car</Nav.Link>
                </Nav.Item>
                <Nav.Item className="vehicule-item">
                  <Nav.Link eventKey={4}>Drone</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>

            <Card.Body className="vehicules-card-body">
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
                <RoboBoatCard />
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

function RoboBoatCard() {
  return (

    <Row className="vehicules-card-row">
      <Col xs={12} md={6}>
      {/* <a href="/projects"> */}
        <Card
          className="vehicule-card"
        >
          {/* <Card.Img src={roboboatPhoto} alt="roboboat" /> */}
          <Card.ImgOverlay
            className="text-center vehicule-card-overlay"
            onClick={() => console.log("a vehiculos")}
          >
            <div className="vehicule-card__highlight">
              <h3 className="info">Learn More</h3>
            </div>
          </Card.ImgOverlay>
        </Card>
        {/* </a> */}
      </Col>
      <Col xs={12} lg={6} className="vehicule-data mt-5">
        <Row className="vehicule-data-stats">
          <h2>Autonomous Boat for International Competitions</h2>
          <p>
            Conquers the Surface by Perceiving Objects Around Him, Maneuvers
            Around Obstacles, Resists Weather Disturbances, and has Waypoint
            Navigation
          </p>
        </Row>
        <Row className="vehicule-data-button">
          <Button href="/projects">Learn More</Button>
        </Row>
      </Col>
    </Row>
  );
}

function RoboSubCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} lg={6}>
        {/* <a href="/projects"> */}
        <Card
          className="vehicule-card"
        >
          <Card.Img src={robosubPhoto} alt="roboboat" />
          <Card.ImgOverlay
            className="text-center vehicule-card-overlay"
            onClick={() => console.log("a vehiculos")}
          >
            <div className="vehicule-card__highlight">
              <h3 className="info">Learn More</h3>
            </div>
          </Card.ImgOverlay>
        </Card>
        {/* </a> */}
      </Col>
      <Col xs={12} lg={6} className="vehicule-data mt-5">
        <Row className="vehicule-data-stats">
          <h2>Autonomous Submarine for International Competitions</h2>
          <h2 style={{color:"rgb(0, 149, 255)"}}>Currently Under Redesign</h2>
          <p>
            Conquers the depths by detecting objects around Him, Maneuvers
            Around Obstacles, Resists Weather Disturbances, and has Waypoint
            Navigation
          </p>
          
        </Row>
        <Row className="vehicule-data-button">
          <Button href="/projects">Learn More</Button>
        </Row>
      </Col>
    </Row>
  );
}

function DroneCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} lg={6}>
        <Card
          className="vehicule-card"
        >
          <Card.Img src={dronePhoto} alt="roboboat" />
          <Card.ImgOverlay
            className="text-center vehicule-card-overlay"
            onClick={() => console.log("a vehiculos")}
          >
            <div className="vehicule-card__highlight">
              <h3 className="info">Coming Soon...</h3>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
      <Col xs={12} md={6} className="vehicule-data mt-5">
        <Row className="vehicule-data-stats">
          <h2>Coming Soon...</h2>
        </Row>
        {/* <Row className="vehicule-data-button">
          <Button>Specs and Evidence</Button>
        </Row> */}
      </Col>
    </Row>
  );
}
function SDV() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} lg={6}>
        <a href="/projects">
        <Card
          className="vehicule-card"
        >
          <Card.Img src={sdvPhoto} alt="roboboat"/>
          <Card.ImgOverlay
            className="text-center vehicule-card-overlay"
            onClick={() => console.log("a vehiculos")}
          >
            <div className="vehicule-card__highlight">
              <h3 className="info">Learn More</h3>
            </div>
          </Card.ImgOverlay>
        </Card>
        </a>
      </Col>
      <Col xs={12} md={6} className="vehicule-data mt-5">
        <Row className="vehicule-data-stats">
          <h2>Autonomous Car For Campus Tours</h2>
          <p>
            Travels through a defined circuit of the ITESM Monterrey campus. The
            vehicle will be the product and example of the multidisciplinary
            collaboration of undergraduate students, with the support of
            professors from the Tecnológico de Monterrey and Industry.
          </p>
        </Row>
        <Row className="vehicule-data-button">
          <Button href="/projects">Learn More</Button>
        </Row>
      </Col>
    </Row>
  );
}

/* <Col md={3}>
                <Card className="vehicule-card">
                  <Card.Img src={roboboat} alt="RoboBoat" />
                  <Card.ImgOverlay className="text-center vehicule-card-overlay">
                    <div className="vehicule-card__highlight">
                      <Card.Title className="text-light">
                        <span className="info">Vehicule Name</span>
                      </Card.Title>
                      <Card.Text className="description">
                        Vehicule Data
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="vehicule-card">
                  <Card.Img src={roboboat} alt="RoboBoat" />
                  <Card.ImgOverlay className="text-center vehicule-card-overlay">
                    <div className="vehicule-card__highlight">
                      <Card.Title className="text-light">
                        <span className="info">Vehicule Name</span>
                      </Card.Title>
                      <Card.Text className="description">
                        Vehicule Data
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="vehicule-card">
                  <Card.Img src={roboboat} alt="RoboBoat" />
                  <Card.ImgOverlay className="text-center vehicule-card-overlay">
                    <div className="vehicule-card__highlight">
                      <Card.Title className="text-light">
                        <span className="info">Vehicule Name</span>
                      </Card.Title>
                      <Card.Text className="description">
                        Vehicule Data
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="vehicule-card">
                  <Card.Img src={roboboat} alt="RoboBoat" />
                  <Card.ImgOverlay className="text-center vehicule-card-overlay">
                    <div className="vehicule-card__highlight">
                      <Card.Title className="text-light">
                        <span className="info">Vehicule Name</span>
                      </Card.Title>
                      <Card.Text className="description">
                        Vehicule Data
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>     */
