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
              Student Group Focused on the Research and Development of Autonomous Vehicles for International Competitions and the Advancement of Technology
            </h4>
            <p>
              Founded in 2017, VantTec aims to inspire young 
              people to get involved in science and
              technology, to build lasting relationships, and above all, to make dreams come true
            </p>
            <Button href='/about'>Learn More</Button>
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
                  Members
                </Card.Text>
                <Card.Title className="mb-2">
                  <h2>76</h2>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="about-stats-col">
            <Card className="about-stats-card">
              <Card.Body>
                <Card.Text>
                  Papers Published
                </Card.Text>
                <Card.Title className="mb-2">
                  <h2>12</h2>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="about-stats-col">
            <Card className="about-stats-card">
              <Card.Body>
                <Card.Text>
                  Awards
                </Card.Text>
                <Card.Title className="mb-2">
                  <h2>18</h2>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Parallax>
  );
}
