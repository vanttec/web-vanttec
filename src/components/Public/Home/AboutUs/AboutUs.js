import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import demo from "../../../../assets/img/jpg/whiteandgray.png";
import aboutPhoto from "../../../../assets/img/jpg/competition2.jpg";
import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <Parallax strength={200} bgImage={demo}>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="hover-effect"
      >
        <Row className="about-us-home">
          <Card className="about-us-home-card">
            <Card.Body>
              <Row className="about-us-home-data">
                <Col xs={12} md={6} className="mission-vision-data-col">
                  <Card.Title>
                    <h2 style={{ color: "black" }}>About</h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      One of the main exponents of autonomous vehicles in
                      Mexico. Participating annually in RoboNation competitions.
                    </p>{" "}
                    <p style={{fontWeight:"normal"}}>
                      Aiming to Inspire young people to get involved in research in areas
                      related to science and technology. In addition, help them learn about opportunities in
                      academic and professional fields.
                    </p>
                    <Button className="mb-3" href="/about">
                      Learn More
                    </Button>
                  </Card.Text>
                </Col>
                <Col xs={12} md={6}>
                  <Card.Img className="shadow-effect" src={aboutPhoto} alt="vision" />
                </Col>
              </Row>
              <Row className="about-stats">
                <Col className="about-stats-col">
                  <Card className="about-stats-card">
                    <Card.Body>
                      <Card.Text>Founded</Card.Text>
                      <Card.Title className="mb-2">
                        <h2>2017</h2>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="about-stats-col">
                  <Card className="about-stats-card">
                    <Card.Body>
                      <Card.Text>Members</Card.Text>
                      <Card.Title className="mb-2">
                        <h2>76</h2>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="about-stats-col">
                  <Card className="about-stats-card">
                    <Card.Body>
                      <Card.Text>Papers Published</Card.Text>
                      <Card.Title className="mb-2">
                        <h2>12</h2>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="about-stats-col">
                  <Card className="about-stats-card">
                    <Card.Body>
                      <Card.Text>Awards</Card.Text>
                      <Card.Title className="mb-2">
                        <h2>18</h2>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Parallax>
  );
}
