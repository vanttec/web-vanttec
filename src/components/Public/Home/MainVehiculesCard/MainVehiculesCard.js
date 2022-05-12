import React, { useState } from "react";
import { Card, Nav, Row, Col, Container } from "react-bootstrap";


//vehicules photos
import roboboat from "../../../../assets/img/png/Screen Shot 2022-05-09 at 18.51.28.png";



import "./MainVehiculesCard.scss";

export default function MainVehiculesCard() {
  const [vehiculeToShow, setVehiculeToShow] = useState("1");

  return (
    <Container fluid>
      <Row className="home-header"><h1>Main Projects</h1></Row>
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
                <Nav.Link eventKey={4}>Autonomous Car</Nav.Link>
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
              <h1>Autonomous Car</h1>
            )}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

function RoboBoatCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6} className="vehicules-card-col">
        <h1>Stats1</h1>
      </Col>
      <Col xs={12} md={6} className="vehicules-card-col">
        <img className="vehicule-card" src={roboboat} alt="robo boat" />
      </Col>
    </Row>
  );
}

function RoboSubCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6}>
        <h1>Stats2</h1>
      </Col>
      <Col xs={12} md={6}>
        <img className="vehicule-card" src={roboboat} alt="robo sub" />
      </Col>
    </Row>
  );
}

function DroneCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6}>
        <h1>Stats3</h1>
      </Col>
      <Col xs={12} md={6}>
        <img className="vehicule-card" src={roboboat} alt="drone" />
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