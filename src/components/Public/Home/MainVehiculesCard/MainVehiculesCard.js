import React, { useState } from "react";
import { Card, Nav, Row, Col, Container, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";

//vehicules photos
import roboboat from "../../../../assets/img/png/Screen Shot 2022-05-09 at 18.51.28.png";
import demo from "../../../../assets/img/jpg/backgroundwhite.png";

import "./MainVehiculesCard.scss";

export default function MainVehiculesCard() {
  const [vehiculeToShow, setVehiculeToShow] = useState("1");

  return (
    <Parallax bgImage={demo} strength={-200}>
      <Container fluid>
        <Row className="home-header">
          <h1>Main Projects</h1>
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
                  <Nav.Link eventKey={1}>RoboBoat</Nav.Link>
                </Nav.Item>
                <Nav.Item className="vehicule-item">
                  <Nav.Link eventKey={2}>RoboSub</Nav.Link>
                </Nav.Item>
                <Nav.Item className="vehicule-item">
                  <Nav.Link eventKey={3}>Drone</Nav.Link>
                </Nav.Item>
                <Nav.Item className="vehicule-item">
                  <Nav.Link eventKey={4}>SDV</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className="vehicules-card-body">
              {vehiculeToShow === "1" ? (
                <RoboBoatCard />
              ) : vehiculeToShow === "2" ? (
                <RoboSubCard />
              ) : vehiculeToShow === "3" ? (
                <DroneCard />
              ) : (
                <SDV />
              )}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Parallax>
  );
}

function RoboBoatCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6}>
        <Card
          className="vehicule-card"
          onClick={() => console.log("a vehiculos")}
        >
          <Card.Img src={roboboat} alt="roboboat" />
          <Card.ImgOverlay
            className="text-center vehicule-card-overlay"
            onClick={() => console.log("a vehiculos")}
          >
            <div className="vehicule-card__highlight">
              <h3 className="info">Specs and Evidence</h3>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="vehicule-data-stats">
        <h2>Autonomous Boat that Competes Internationally</h2>
        <p>Perceives Objects around him, has a seamless automatic change in direction to avoid obstacles, and much more</p>
        </Row>
        <Row className="vehicule-data-button">
          <Button>Specs and Evidence</Button>
        </Row>
      </Col>
    </Row>
  );
}

function RoboSubCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6}>
        <Card
          className="vehicule-card"
          onClick={() => console.log("a vehiculos")}
        >
          <Card.Img src={roboboat} alt="roboboat" />
          <Card.ImgOverlay
            className="text-center vehicule-card-overlay"
            onClick={() => console.log("a vehiculos")}
          >
            <div className="vehicule-card__highlight">
              <h3 className="info">Specs and Evidence</h3>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="vehicule-data-stats">
        <h2>Autonomous Submarine that Competes Internationally</h2>
        <p>Perceives Objects around him, has a seamless automatic change in direction to avoid obstacles, and much more</p>
        </Row>
        <Row className="vehicule-data-button">
          <Button>Specs and Evidence</Button>
        </Row>
      </Col>
    </Row>
  );
}

function DroneCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6}>
        <Card
          className="vehicule-card"
          onClick={() => console.log("a vehiculos")}
        >
          <Card.Img src={roboboat} alt="roboboat" />
          <Card.ImgOverlay
            className="text-center vehicule-card-overlay"
            onClick={() => console.log("a vehiculos")}
          >
            <div className="vehicule-card__highlight">
              <h3 className="info">Specs and Evidence</h3>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="vehicule-data-stats">
          <h1>Stats DRONE</h1>
        </Row>
        <Row className="vehicule-data-button">
          <Button>Specs and Evidence</Button>
        </Row>
      </Col>
    </Row>
  );
}
function SDV() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6}>
        <Card
          className="vehicule-card"
          onClick={() => console.log("a vehiculos")}
        >
          <Card.Img src={roboboat} alt="roboboat" />
          <Card.ImgOverlay
            className="text-center vehicule-card-overlay"
            onClick={() => console.log("a vehiculos")}
          >
            <div className="vehicule-card__highlight">
              <h3 className="info">Specs and Evidence</h3>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="vehicule-data-stats">
        <h2>Autonomous Car For Campus Tours</h2>
        <p>Autonomously, it can travel through a defined circuit of the ITESM Monterrey campus.

The vehicle will be the product and example of the multidisciplinary collaboration of undergraduate students, with the support of professors from the Tecnológico de Monterrey.
        </p>
        </Row>
        <Row className="vehicule-data-button">
          <Button>Specs and Evidence</Button>
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
