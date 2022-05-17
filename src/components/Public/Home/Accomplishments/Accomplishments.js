import React, {useState} from 'react'
import {Container, Row, Col, Nav, Card} from 'react-bootstrap'
import { Parallax } from "react-parallax";

//photos
import roboboat from "../../../../assets/img/png/roboboat-logo.png";
import robosub from "../../../../assets/img/png/robosub-logo.png";
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
                <RoboSubAwards />
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
        <div>
        <h4>2021</h4>
        <ul>
          <li><span className='award-data-stats-year-2021'>1st Place</span> Skills Video Sensor Optimization</li>
          <li><span className='award-data-stats-year-2021'>1st Place</span> Skills Video Power Management</li>
          <li><span className='award-data-stats-year-2021'>1st Place</span> Optional Video</li>
          <li><span className='award-data-stats-year-2021'>3rd Place</span> Website</li>
          <li><span className='award-data-stats-year-2021'>4th Place</span> Technical Design Report</li>
          <li><span className='award-data-stats-year-2021'>Special Award</span> Advanced Techniques</li>
        </ul>

        <h4>2020</h4>
        <ul>
        <li><span className='award-data-stats-year-2020'>1st Place 2020</span> Overall Standings</li>
          <li><span className='award-data-stats-year-2020'>1st Place 2020</span> Technical Design Report</li>
          <li><span className='award-data-stats-year-2020'>1st Place 2020</span> Website</li>
          <li><span className='award-data-stats-year-2020'>1st Place 2020</span> Video</li>
          <li><span className='award-data-stats-year-2020'>Special Award 2020</span> Evidence In Testing</li>
        </ul>
        </div>
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

function RoboSubAwards(){
  return(
    <Row className="awards-card-row">
    <Col xs={12} md={6} className="award-data">
      <Row className="award-data-stats">
        <h4>2020</h4>
        <ul>
          <li><span className='award-data-stats-year-2020'>3rd Place 2020</span> Overall Standings</li>
          <li><span className='award-data-stats-year-2020'>1st Place 2020</span> Video Submission</li>
          <li><span className='award-data-stats-year-2020'>4th Place 2020</span> Website</li>
        </ul>
      </Row>
    </Col>
    <Col xs={12} md={6}>
      <Card
        className="award-card"
      >
        <Card.Img src={robosub} alt="roboboat" />
        <Card.ImgOverlay
          className="text-center"
        >
        </Card.ImgOverlay>
      </Card>
    </Col>

  </Row>
);
}
