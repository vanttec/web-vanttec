import React, { useState } from "react";
import { Card, Nav, Row, Col, Container, Button } from "react-bootstrap";


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
  );
}

function RoboBoatCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="vehicule-data-stats">
        <h1>Stats ROBOBOAT</h1>
        </Row>
        <Row className="vehicule-data-button">
          <Button>Visit Projects Profile</Button>
        </Row>
      </Col>
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
              <h2 className="info">Visit Projects Profile</h2>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  );
}

function RoboSubCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="vehicule-data-stats">
        <h1>Stats ROBOSUB</h1>
        </Row>
        <Row className="vehicule-data-button">
          <Button>Visit Projects Profile</Button>
        </Row>
      </Col>
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
              <h2 className="info">Visit Projects Profile</h2>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  );
}

function DroneCard() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="vehicule-data-stats">
        <h1>Stats DRONE</h1>
        </Row>
        <Row className="vehicule-data-button">
          <Button>Visit Projects Profile</Button>
        </Row>
      </Col>
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
              <h2 className="info">Visit Projects Profile</h2>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  );
}
function SDV() {
  return (
    <Row className="vehicules-card-row">
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="vehicule-data-stats">
        <h1>Stats SDV</h1>
        </Row>
        <Row className="vehicule-data-button">
          <Button>Visit Projects Profile</Button>
        </Row>
      </Col>
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
              <h2 className="info">Visit Projects Profile</h2>
            </div>
          </Card.ImgOverlay>
        </Card>
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