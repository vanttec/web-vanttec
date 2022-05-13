import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Parallax } from "react-parallax";

//Photos
import demo from "../../../../assets/img/jpg/backgroundwhite.png";

//Logos
import googleLogo from "../../../../assets/img/png/googleLogo.png";
import tecLogo from "../../../../assets/img/png/tecLogo.png";

import "./Sponsors.scss";

export default function Sponsors() {
  return (
    <Parallax strength={-200} bgImage={demo}>
      <Container fluid>
        <Row className="home-header">
          <h1>All Of This Is Possible Thanks To Our Sponsors</h1>
        </Row>
        <Row>
          {/* Tec de monterrey */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={tecLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* Google */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={googleLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* NVidia */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={googleLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* Robonation */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={googleLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* Akky */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={googleLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* IFM */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={googleLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* Akky */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={googleLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* IFM */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={googleLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Parallax>
  );
}
