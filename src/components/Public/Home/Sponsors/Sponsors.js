import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";

//Photos
import demo from "../../../../assets/img/jpg/backgroundwhite.png";

//Logos
import googleLogo from "../../../../assets/img/png/googleLogo.png";
import tecLogo from "../../../../assets/img/png/tecLogo.png";
import nvidiaLogo from "../../../../assets/img/png/nvidiaLogo.png";
import roboNationLogo from "../../../../assets/img/png/roboNationLogo.png";
import sbgSysLogo from "../../../../assets/img/png/sbgSystemsLogo.png";
import guntnerLogo from "../../../../assets/img/png/Güntner.png";
import velodyneLogo from "../../../../assets/img/png/velodyneLogo.png";
import vectorNavLogo from "../../../../assets/img/png/vectorNavLogo.png";
import siemensLogo from "../../../../assets/img/png/siemensLogo.png";
import techmakeLogo from "../../../../assets/img/png/techmakeLogo.png";
import zfLogo from "../../../../assets/img/png/zfLogo.png";

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
                <img className="sponsor-card-logo" src={nvidiaLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* Robonation */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={roboNationLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* sbg */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={sbgSysLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* Velodyne */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={velodyneLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* guntner */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={guntnerLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* vector nav */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={vectorNavLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* siemens */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={siemensLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* techmake */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={techmakeLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>
          {/* ZF */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card">
              <Card.Body className="sponsor-card-body">
                <img className="sponsor-card-logo" src={zfLogo} alt="google logo" />
              </Card.Body>
            </Card>
          </Col>

          {/* More */}
          <Col xs={6} md={3}>
            <Card className="sponsor-card see-more-card" >
              <Card.Body className="sponsor-card-body">
                <Button href="/sponsors" style={{height:"100%", width: "100%"}}>See More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Parallax>
  );
}
