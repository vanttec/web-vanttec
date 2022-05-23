import React, { useState } from "react";
import { Card, Nav, Row, Col, Button, Carousel } from "react-bootstrap";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import MembersList from "../../Team/MembersList/MembersList";

//vehicules photos
import roboboatCompetition from "../../../../assets/img/png/roboboat-logo.png";
import roboboatPhoto from "../../../../assets/img/jpeg/roboboatPhoto.jpg";
import roboboatEvidence from "../../../../assets/img/jpg/competencia.jpg";

//video
import muralVideo from "../../../../assets/videos/mp4/VanttecDroneMural.mp4";
import David from "../../../../assets/img/jpeg/Yo.jpg";

import "./RoboBoatProject.scss";

export default function RoboBoatProject() {
  const [vehiculeToShow, setVehiculeToShow] = useState("1");

  // import members.json
  const testMembers = require("../../../../assets/members.json");

  return (
    <>
      {/* ABOUT ROBOBOAT COMPETITION */}
      <Row className="mt-5 mb-5">
        <Card style={{ borderColor: "transparent" }}>
          <Card.Body>
            <Row className="mission-vision-data">
            <Col xs={12} md={6}>
                <Card.Img src={roboboatCompetition} alt="vision" />
              </Col>
              <Col xs={12} md={6} className="mission-vision-data-col">
                <Card.Title>
                  <h2>About International RoboBoat Competition</h2>
                </Card.Title>
                <Card.Text>
                  <p>
                    International RoboBoat Competition is a competition that
                    invites participants to tackle simplified versions of
                    challenges facing the modern maritime industry.
                  </p>{" "}
                  <p>
                    Vanttec started participating in this competition since 2016
                    and this year, the competition is a little different because
                    it is held online.
                  </p>
                  <Button href="https://roboboat.org/programs/2022/">
                    Learn More
                  </Button>
                </Card.Text>
              </Col>

            </Row>
          </Card.Body>
        </Card>
      </Row>

      {/* 2022 Submission Intro */}
      <Row className="mt-5 mb-5">
        <Card style={{ borderColor: "transparent" }}>
          <Card.Body>
            <Row className="mission-vision-data">

              <Col xs={12} md={6} className="mission-vision-data-col">
                <Card.Title>
                  <h2>2022 Submission</h2>
                </Card.Title>
                <Card.Text>
                  <p>
                    International RoboBoat Competition is a competition that
                    invites participants to tackle simplified versions of
                    challenges facing the modern maritime industry.
                  </p>{" "}
                  <p>
                    Vanttec started participating in this competition since 2016
                    and this year, the competition is a little different because
                    it is held online.
                  </p>
                  <Button className="mb-5" href="">
                  Technical Design Report
                  </Button>
                </Card.Text>
              </Col>
              <Col xs={12} md={6}>
                <iframe className="video-frame" src="https://www.youtube.com/embed/T0QQMA9NpLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

        {/* SPECS ROBOBOAT COMPETITION */}
        <Row>
          <Row className="project-header">
            <h2>Specs</h2>
          </Row>
          <Card
            className="projects-card"
            style={{ backgroundColor: "transparent" }}
          >
            <Card.Header>
              <Nav
                variant="pills"
                justify
                defaultActiveKey={vehiculeToShow}
                activeKey={vehiculeToShow}
                onSelect={(selectedKey) => {
                  setVehiculeToShow(selectedKey);
                }}
              >
                <Nav.Item className="vehicule-item">
                  <Nav.Link eventKey={1}>Mechanical</Nav.Link>
                </Nav.Item>
                <Nav.Item className="vehicule-item">
                  <Nav.Link eventKey={2}>Software</Nav.Link>
                </Nav.Item>
                <Nav.Item className="vehicule-item">
                  <Nav.Link eventKey={3}>Components</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>

            <Card.Body className="projects-card-body">
              <SwitchTransition mode={"out-in"}>
                <CSSTransition
                  key={vehiculeToShow}
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  classNames="fade"
                >
                  <div>
                    {vehiculeToShow === "1" ? (
                      <RoboBoatMechanicalCard />
                    ) : vehiculeToShow === "2" ? (
                      <RoboBoatSoftwareCard />
                    ) : (
                      <RoboBoatComponentsCard />
                    )}
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </Card.Body>
          </Card>
        </Row>

        {/* Evidence */}
        <Row>
          <Row className="project-header">
            <h2>Evidence</h2>
          </Row>
          <Row>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={roboboatEvidence} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={roboboatEvidence} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={roboboatEvidence} />
              </Carousel.Item>
            </Carousel>
          </Row>
        </Row>

        {/* Members */}
        <Row>
          <Row className="project-header">
            <h2>Members</h2>
          </Row>
          <Row className="members-list mb-5">
            <MembersList
              video={muralVideo}
              members={testMembers}
              area={"Media"}
            />
          </Row>
        </Row>
    </>
  );
}

function RoboBoatMechanicalCard() {
  return (
    <Row className="projects-card-row">
      <Col xs={12} md={6}>
        <Card className="project-card">
          <Card.Img src={roboboatPhoto} alt="roboboat" />
        </Card>
      </Col>
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="project-data-stats">
          <h2>Mechanical Specs</h2>
          <div>
            <ul>
              <li> Length: 1 m</li>
              <li>Beam: 0.75 m</li>
              <li>Mass: 30 kg</li>
              <li>Maximum Thrust: 73</li>
            </ul>
          </div>
        </Row>
      </Col>
    </Row>
  );
}

function RoboBoatSoftwareCard() {
  return (
    <Row className="projects-card-row">
      <Col xs={12} md={6}>
        <Card className="project-card">
          <Card.Img src={roboboatPhoto} alt="roboboat" />
        </Card>
      </Col>
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="project-data-stats">
          <h2>Software Specs</h2>
          <div>
            <ul>
              <li> ROS Interface</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </div>
        </Row>
      </Col>
    </Row>
  );
}
function RoboBoatComponentsCard() {
  return (
    <Row className="projects-card-row">
      <Col xs={12} md={6}>
        <Card className="project-card">
          <Card.Img src={roboboatPhoto} alt="roboboat" />
        </Card>
      </Col>
      <Col xs={12} md={6} className="vehicule-data">
        <Row className="project-data-stats">
          <h2>Components Specs</h2>
          <div>
            <ul>
              <li> Thrusters: Blue Robotics T200</li>
              <li>Power System: Li-4S 14.8V 18Ah</li>
              <li>Teleoperation: FrSky Taranis X9D Plus</li>
              <li>Processor: NVIDIA Jetson TX2</li>
              <li>LiDAR: Velodyne VLP-16</li>
              <li>INS: VectorNav VN-300</li>
              <li>Camera: ZED Camera</li>
              <li>Hydrophones: Teledyne TC4013, Aquarian H1C</li>
              <li>RF Modules: Digi XTend</li>
            </ul>
          </div>
        </Row>
      </Col>
    </Row>
  );
}
