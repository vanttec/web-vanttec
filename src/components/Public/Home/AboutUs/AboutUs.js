import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Parallax } from "react-parallax";
import demo from "../../../../assets/img/jpg/whiteandgray.png";

import './AboutUs.scss'

export default function AboutUs() {
  return (
    <Parallax strength={100} bgImage={demo}>
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
          </div>
        </Row>
        <Row className="about-stats">
          <Col>
            <span>2017</span>
            <h4>Founded</h4>
          </Col>
          <Col>
            <span>#</span>
            <h4>Members</h4>
          </Col>
          <Col>
            <span>#</span>
            <h4>Published Papers</h4>
          </Col>
          <Col>
            <span>#</span>
            <h4>Fact/Stat</h4>
          </Col>
        </Row>
      </Container>
    </Parallax>
  );
}
