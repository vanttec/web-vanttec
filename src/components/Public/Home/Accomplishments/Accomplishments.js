import React, {useState} from 'react'
import {Container, Row, Col, Nav, Card, Button} from 'react-bootstrap'

//photos
import roboboat from "../../../../assets/img/png/roboboat-logo.png";
import robosub from "../../../../assets/img/png/robosub-logo.png";
import vanttecLogo from "../../../../assets/img/png/LogoAzul_Negro.png";

import './Accomplishments.scss'

export default function Accomplishments() {
  const [awardsToShow, setAwardsToShow] = useState("1");
  return (
    <Container fluid style={{display:"flex", flexDirection:"column", alignItems:"center"}} className="hover-effect">
        <Row className='home-header'>
            <h2>Awards</h2>
        </Row>
        <Row>
        <Card
            className="awards-card"
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
                  <Nav.Link eventKey={1}>VantTec</Nav.Link>
                </Nav.Item>
                <Nav.Item className="award-item">
                  <Nav.Link eventKey={2}>RoboBoat</Nav.Link>
                </Nav.Item>
                <Nav.Item className="award-item">
                  <Nav.Link eventKey={3}>RoboSub</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className="awards-card-body">
              {awardsToShow === "1" ? (
                <VanttecCard />
              ) : awardsToShow === "2" ? (
                <RoboBoatAwards />
              ) : (
                <RoboSubAwards />
              )
            }
            </Card.Body>
          </Card>
        </Row>
    </Container>
  )
}

function VanttecCard(){
  return (
    <Row className="awards-card-row">
      <Col xs={12} md={6} className="award-data">
        <Row className="award-data-stats">
          <h2>RÓMULO GARZA AWARD</h2>
          <p>
            The Rómulo Garza award is the main distinction granted by the
            Tecnológico de Monterrey and Xignux to recognize the effort made and
            the results of the research carried out by the professors and
            student researchers of the Tecnológico de Monterrey.
          </p>

          <p>
            We were awarded the Rómulo Garza award for our focus on researching
            issues related to autonomous vehicles. This work has been exhibited
            at different outreach conferences and published in different media.
          </p>
        </Row>
        <Button href="/research">Learn More About Our Research</Button>
      </Col>
      <Col xs={12} md={6}>
        <Card className="award-card">
          <Card.Img src={vanttecLogo} alt="roboboat" />
          <Card.ImgOverlay className="text-center"></Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  );
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
        <div>
        <h4>2020</h4>
        <ul>
          <li><span className='award-data-stats-year-2020'>3rd Place 2020</span> Overall Standings</li>
          <li><span className='award-data-stats-year-2020'>1st Place 2020</span> Video Submission</li>
          <li><span className='award-data-stats-year-2020'>4th Place 2020</span> Website</li>
        </ul>
        </div>
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
