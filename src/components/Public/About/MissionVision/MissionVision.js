import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Parallax } from "react-parallax";
import demo from "../../../../assets/img/jpg/whiteandgray.png";
import vision from "../../../../assets/img/jpg/competition2.jpg";
import mission from "../../../../assets/img/jpg/competencia.jpg";

import "./MissionVision.scss";

export default function MissionVision() {
  return (
    <Parallax strength={200} bgImage={demo}>
      <Container fluid style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Row className="home-header">
          <h1>About Us</h1>
        </Row>
        <Row className="mission-vision">
          <Card className="mission-vision-card">
            <Card.Body>
              <Row className="mission-vision-data">
                <Col xs={12} md={6} className="mission-vision-data-col">
                  <Card.Title>
                    <h2>Vision</h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Become one of the main exponents of autonomous vehicles in
                      Mexico.
                    </p>{" "}
                    <p>
                      Inspire young people to get involved in research in areas
                      related to science and technology. In addition, help them
                      learn about national and international opportunities in
                      academic and professional fields.
                    </p>
                  </Card.Text>
                </Col>
                <Col xs={12} md={6}>
                  <Card.Img src={vision} alt="vision"/>                  
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row className="mission-vision">
          <Card className="mission-vision-card">
            <Card.Body>
              <Row className="mission-vision-data mission-vision-data-mission">
              <Col xs={12} md={6}>
                  <Card.Img src={mission} alt="mission"/>                  
                </Col>
                <Col xs={12} md={6} className="mission-vision-data-col">
                  <Card.Title>
                    <h2>Mission</h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                    Participate annually in RoboNation competitions.
                    </p>{" "}
                    <p>
                    Develop research projects that culminate in scientific articles based on technologies used in the group to promote science and technology in areas related to autonomous vehicles.
                    </p>
                  </Card.Text>
                </Col>

              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Parallax>
  );
}
