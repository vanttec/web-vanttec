import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Parallax } from "react-parallax";
import demo from "../../../../assets/img/jpg/david-jorre-9f1gCaLkZBU-unsplash.jpg";
import vision from "../../../../assets/img/jpg/competition2.jpg";
import mission from "../../../../assets/img/jpg/competencia.jpg";
import values from "../../../../assets/img/jpg/valuess.jpg";

import "./MissionVision.scss";

export default function MissionVision() {
  return (
      <Container fluid style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
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
        <Row className="mission-vision">
          <Card className="mission-vision-card">
            <Card.Body>
              <Row className="mission-vision-data">
                <Col xs={12} md={6} className="mission-vision-data-col">
                  <Card.Title>
                    <h2>Values</h2>
                  </Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Respect and Help Others</li>
                      <li>Share Your Knowledge</li>
                      <li>Create the Craziest Things</li>
                      <li>Be yourself and Trust in your Talent</li>
                      <li>Unlimited Creativity</li>
                      <li>Passion</li>
                      <li>Inspiration</li>
                      <li>Commitment and Dedication</li>
                      <li>Learn Beyond School</li>
                    </ul>
                  </Card.Text>
                </Col>
                <Col xs={12} md={6}>
                  <Card.Img src={values} alt="vision"/>                  
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
  );
}
