import React, {useState} from 'react'
import {Container, Row, Col, Nav, Card} from 'react-bootstrap'
import { Parallax } from "react-parallax";

//photos
import roboboat from "../../../../assets/img/png/roboboat-logo.png";
import demo from "../../../../assets/img/jpg/backgroundwhite.png";

import './Accomplishments.scss'

export default function Accomplishments() {
  const [awardsToShow, setAwardsToShow] = useState("1");
  return (
    <Parallax strength={200} bgImage={demo}>
    <Container fluid>
        <Row className='home-header'>
            <h1>Achievements</h1>
        </Row>
        <Row>
        <Card
            className="awards-card"
            style={{ backgroundColor: "transparent" }}
          >
            <Card.Header>
              <Nav
                variant="pills"
                justify
                defaultActiveKey={awardsToShow}
                activeKey={awardsToShow}
                onSelect={(selectedKey) => {
                  setAwardsToShow(selectedKey);
                }}
              >
                <Nav.Item className="award-item">
                  <Nav.Link eventKey={1}>RoboBoat</Nav.Link>
                </Nav.Item>
                <Nav.Item className="award-item">
                  <Nav.Link eventKey={2}>RoboSub</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className="awards-card-body">
              {awardsToShow === "1" ? (
                <RoboBoatAwards />
              ) : (
                <h1>ROBOSUB</h1>
              )}
            </Card.Body>
          </Card>
        </Row>
    </Container>
    </Parallax>
  )
}

function RoboBoatAwards(){
  return(
    <Row className="awards-card-row">
    <Col xs={12} md={6} className="award-data">
      <Row className="award-data-stats">
        <h1>Awards ROBOBOAT</h1>
      </Row>
    </Col>
    <Col xs={12} md={6}>
      <Card
        className="award-card"
      >
        <Card.Img src={roboboat} alt="roboboat" />
        <Card.ImgOverlay
          className="text-center"
        >
        </Card.ImgOverlay>
      </Card>
    </Col>

  </Row>
);
}
