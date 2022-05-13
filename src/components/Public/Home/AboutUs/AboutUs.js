import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Parallax } from "react-parallax";
import demo from "../../../../assets/img/jpg/whiteandgray.png";

import './AboutUs.scss'

export default function AboutUs() {
  return (
    <Parallax strength={200} bgImage={demo}>
      <Container fluid>
        <Row className="home-header">
          <h1>About</h1>
        </Row>
        <Row className="about">
          <div className="about-description">
            <h4>
              Group of students focused on research and development of
              Autonomous Vehicles.
            </h4>
            <p>
              Aiming to inspire young people to get involved in science and
              technology.
            </p>
            <Button>Learn More</Button>
          </div>
        </Row>
        <Row className="about-stats">
          <Col className="about-stats-col">
            <Card className="about-stats-card">
              <Card.Body>
                <Card.Text>
                  Founded
                </Card.Text>
                <Card.Title className="mb-2">
                  <h2>2017</h2>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="about-stats-col">
            <Card className="about-stats-card">
              <Card.Body>
                <Card.Text>
                  Number of Members
                </Card.Text>
                <Card.Title className="mb-2">
                  <h2>80</h2>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="about-stats-col">
            <Card className="about-stats-card">
              <Card.Body>
                <Card.Text>
                  Founded
                </Card.Text>
                <Card.Title className="mb-2">
                  <h2>2017</h2>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="about-stats-col">
            <Card className="about-stats-card">
              <Card.Body>
                <Card.Text>
                  Founded
                </Card.Text>
                <Card.Title className="mb-2">
                  <h2>2017</h2>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Parallax>
  );
}
