import React, { useState } from 'react'
import {
  Card,
  Nav,
  Row,
  Col,
  Button,
  Carousel,
  Accordion,
} from 'react-bootstrap'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import MembersList from '../../Team/MembersList/MembersList'

//vehicules photos
import roboboatCompetition from '../../../../assets/img/png/roboboat-logo.png'
import roboboatPhoto from '../../../../assets/img/jpeg/roboboatPhoto.jpg'
import roboboatRender from '../../../../assets/img/jpeg/renderBote.png'
import roboboatSoftware from '../../../../assets/img/jpeg/software.jpeg'
import roboboatComponents from '../../../../assets/img/png/componentsBote.png'
import roboboatEvidence from '../../../../assets/img/jpg/competencia.jpg'
import './RoboBoatProject.scss'

const blogs2022 = require('../../../../assets/buildingBlogs.json')

export default function RoboBoatProject() {
  const [vehiculeToShow, setVehiculeToShow] = useState('1')

  // import members.json
  const testMembers = require('../../../../assets/members.json')

  return (
    <>
      {/* ABOUT ROBOBOAT COMPETITION */}
      <Row className="pt-3 pb-3 justify-content-center hover-effect">
        <Card style={{ borderColor: 'transparent' }}>
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
                  </p>{' '}
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
      <Row className=" pt-3 pb-3  justify-content-center hover-effect">
        <Card style={{ borderColor: 'transparent' }}>
          <Card.Body>
            <Row className="mission-vision-data">
              <Col xs={12} md={6} className="mission-vision-data-col">
                <Card.Title>
                  <h2>2022 Submission</h2>
                </Card.Title>
                <Card.Text>
                  <p>
                    Vanttec started participating in this competition since 2017
                    and this year, the competition is a little different because
                    it is held online.
                  </p>{' '}
                  <Button className="mb-5" href="">
                    Technical Design Report
                  </Button>
                </Card.Text>
              </Col>
              <Col xs={12} md={6}>
                <iframe
                  className="video-frame"
                  src="https://www.youtube.com/embed/T0QQMA9NpLU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>Competition Strategy Video</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      {/* SPECS ROBOBOAT COMPETITION */}
      <Row className=" pt-3 pb-3  justify-content-center hover-effect">
        <Row className="project-header">
          <h2>Specs</h2>
        </Row>
        <Card
          className="projects-card"
          style={{ backgroundColor: 'transparent' }}
        >
          <Card.Header>
            <Nav
              variant="pills"
              justify
              defaultActiveKey={vehiculeToShow}
              activeKey={vehiculeToShow}
              onSelect={(selectedKey) => {
                setVehiculeToShow(selectedKey)
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
            <SwitchTransition mode={'out-in'}>
              <CSSTransition
                key={vehiculeToShow}
                addEndListener={(node, done) => {
                  node.addEventListener('transitionend', done, false)
                }}
                classNames="fade"
              >
                <div>
                  {vehiculeToShow === '1' ? (
                    <RoboBoatMechanicalCard />
                  ) : vehiculeToShow === '2' ? (
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

      {/* BLOGS */}
      <Row className=" pt-3 pb-3  justify-content-center hover-effect">
        <Row className="project-header">
          <h2>Build Process</h2>
        </Row>
        <Row>
          <Accordion>
            {blogs2022.map((blog) => (
              <Accordion.Item eventKey={blog.number}>
                <Accordion.Header>{blog.title}</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <h1>{blog.title}</h1>
                      <h2>Resources</h2>
                      <p>{blog.resources}</p>
                      <h2>Description</h2>
                      <p>{blog.description}</p>
                      <h2>Results</h2>
                      <p>{blog.results}</p>
                      <h2>Justification</h2>
                      <p>{blog.justification}</p>
                      <h2>Author(s)</h2>
                      <p>{blog.author}</p>
                    </Col>
                    <Col xs="5">
                      <div>
                        <Carousel>
                          {blog.images.map((image) => (
                            <Carousel.Item style={{ height: '50vh' }}>
                              <div class="blogImageItem">
                                <img className="d-block" src={image} />
                              </div>
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </div>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Row>
      </Row>

      {/* Members */}
      <Row className="pt-3 pb-5  justify-content-center hover-effect">
        <Row className="project-header">
          <h2>Members</h2>
        </Row>
        <Row className="members-list pb-5">
          <MembersList
            video={'https://player.vimeo.com/video/713521461'}
            members={testMembers}
            area={'Media'}
          />
        </Row>
      </Row>
    </>
  )
}

function RoboBoatMechanicalCard() {
  return (
    <Row className="projects-card-row">
      <Col xs={12} lg={6} className="mb-5">
        <Card className="project-card">
          <Card.Img src={roboboatRender} alt="roboboat" />
        </Card>
      </Col>
      <Col xs={12} lg={6} className="vehicule-data mt-3">
        <Row className="project-data-stats p-5">
          <h2>Mechanics</h2>
          <ul>
            <li> Length: 1 m</li>
            <li>Beam: 0.75 m</li>
            <li>Mass: 30 kg</li>
            <li>Maximum Thrust: 73 Newtons</li>
          </ul>
        </Row>
      </Col>
    </Row>
  )
}

function RoboBoatSoftwareCard() {
  return (
    <Row className="projects-card-row">
      <Col xs={12} lg={6}>
        <Card className="project-card">
          <Card.Img src={roboboatSoftware} alt="roboboat" />
        </Card>
      </Col>
      <Col xs={12} lg={6} className="vehicule-data mt-3">
        <Row className="project-data-stats p-5">
          <h2>Software</h2>
          <ul>
            <li> ROS Interface</li>
            <li> ROS Melodic distro-based architecture</li>
            <li>Darknet neural network</li>
            <li>YOLOv3 real-time object detection</li>
            <li>Python</li>
            <li>C++</li>
          </ul>
          <p>
            Opensource @{' '}
            <a
              href="https://github.com/vanttec"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/vanttec
            </a>
          </p>
        </Row>
      </Col>
    </Row>
  )
}
function RoboBoatComponentsCard() {
  return (
    <Row className="projects-card-row">
      <Col xs={12} lg={6}>
        <Card className="project-card">
          <Card.Img src={roboboatComponents} alt="roboboat" />
        </Card>
      </Col>
      <Col xs={12} lg={6} className="vehicule-data mt-3 justify-content-center">
        <Row className="project-data-stats p-5 ">
          <h2>Components</h2>
          <ul>
            <li> Thrusters: Blue Robotics T200</li>
            <li>Power System: Li-4S 14.8V 18Ah</li>
            <li>Teleoperation: FrSky Taranis X9D Plus</li>
            <li>Processor: NVIDIA Jetson TX2</li>
            <li>LiDAR: Velodyne VLP-16 Puck</li>
            <li>INS: SBG Ellipse-D</li>
            <li>Camera: ZED Camera</li>
            <li>Hydrophones: Teledyne TC4013, Aquarian H1C</li>
            <li>RF Modules: XBee S3 Pro</li>
          </ul>
        </Row>
      </Col>
    </Row>
  )
}
