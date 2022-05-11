import React, {useState} from "react";
import {
  Container,
  Col,
  Row,
  Card,
  Carousel,
  Nav,
  Button,
} from "react-bootstrap";
import { Parallax } from "react-parallax";

//photos
import logoVantec from "../../../assets/img/png/LogoBlanco_Blanco.png";
import pattern from "../../../assets/img/jpg/andrew-kliatskyi-r4HT6aurLQw-unsplash.jpg";
import roboboat from "../../../assets/img/png/Screen Shot 2022-05-09 at 18.51.28.png";
import pavor from "../../../assets/img/jpg/david-troeger-M8xxVih_V_U-unsplash.jpg";

import Banner from "../../../components/Public/Banner/Banner";
// import Footer from "../../../components/Public/Footer/Footer";
// import Aside from "../../../components/Public/Aside/Aside";

//video
import demo from "../../../assets/videos/mp4/VanttecDroneMural.mp4";
import mediaVideo from "../../../assets/videos/mp4/mediaVideo.mp4";
import perceptionVideo from "../../../assets/videos/mp4/perceptionVideo.mp4";
import electronicsVideo from "../../../assets/videos/mp4/electronicsVideo.mp4";
import mechanicsVideo from "../../../assets/videos/mp4/mechanicsVideo.mp4";
import softwareVideo from "../../../assets/videos/mp4/softwareVideo.mp4";

import "./Home.scss";

export default function Home() {

  return (
    <Container fluid>
      <Row className="main-banner">
        <Banner video={demo}>
          <img className="logo" src={logoVantec} alt="logo vanttec"/>
          <h3 style={{ color: "white" }}>
            Research and Development of Autonomous Vehicles
          </h3>
        </Banner>
      </Row>

      <div className="content">
        {/* About */}
        <div className="division"></div>

        <Row className="section-solidbg">
          <h1>About Us</h1>
        </Row>

        {/* Vehicules */}
        <div className="division"></div>
        <Parallax strength={1000} bgImage={pavor}>
          <Container fluid className="overlay">
            <Row className="section-parallaxbg">
              <h1>Main Pojects</h1>
              <VehiculesCard />
              {/* <Col md={3}>
                <Card className="vehicule-card">
                  <Card.Img src={roboboat} alt="RoboBoat" />
                  <Card.ImgOverlay className="text-center vehicule-card-overlay">
                    <div className="vehicule-card__highlight">
                      <Card.Title className="text-light">
                        <span className="info">Vehicule Name</span>
                      </Card.Title>
                      <Card.Text className="description">
                        Vehicule Data
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="vehicule-card">
                  <Card.Img src={roboboat} alt="RoboBoat" />
                  <Card.ImgOverlay className="text-center vehicule-card-overlay">
                    <div className="vehicule-card__highlight">
                      <Card.Title className="text-light">
                        <span className="info">Vehicule Name</span>
                      </Card.Title>
                      <Card.Text className="description">
                        Vehicule Data
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="vehicule-card">
                  <Card.Img src={roboboat} alt="RoboBoat" />
                  <Card.ImgOverlay className="text-center vehicule-card-overlay">
                    <div className="vehicule-card__highlight">
                      <Card.Title className="text-light">
                        <span className="info">Vehicule Name</span>
                      </Card.Title>
                      <Card.Text className="description">
                        Vehicule Data
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="vehicule-card">
                  <Card.Img src={roboboat} alt="RoboBoat" />
                  <Card.ImgOverlay className="text-center vehicule-card-overlay">
                    <div className="vehicule-card__highlight">
                      <Card.Title className="text-light">
                        <span className="info">Vehicule Name</span>
                      </Card.Title>
                      <Card.Text className="description">
                        Vehicule Data
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>   */}
            </Row>
          </Container>
        </Parallax>

        {/* Team */}
        <div className="division"></div>
        <Container fluid className="overlay">
          <Row className="section-solidbg" style={{ backgroundColor: "white" }}>
            <h1>Team Areas</h1>
            <Carousel fade variant="dark" indicators={false}>
              <Carousel.Item>
                <video
                  className="d-block w-100"
                  src={perceptionVideo}
                  autoPlay
                  loop
                  muted
                />
                <Carousel.Caption>
                  <h3>Perception</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="overlay">
                  <video
                    className="d-block w-100"
                    src={softwareVideo}
                    autoPlay
                    loop
                    muted
                  />
                </div>
                <Carousel.Caption>
                  <h3>Software</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="overlay">
                  <video
                    className="d-block w-100"
                    src={mechanicsVideo}
                    autoPlay
                    loop
                    muted
                  />
                </div>
                <Carousel.Caption>
                  <h3>Mechanics</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="overlay">
                  <video
                    className="d-block w-100"
                    src={electronicsVideo}
                    autoPlay
                    loop
                    muted
                  />
                </div>
                <Carousel.Caption>
                  <h3>Electronics</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="overlay">
                  <video
                    className="d-block w-100"
                    src={mediaVideo}
                    autoPlay
                    loop
                    muted
                  />
                </div>
                <Carousel.Caption>
                  <h3>Media</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
        <div className="division"></div>
      </div>
    </Container>
    // <>
    //   <div style={{ height: "85vh" }}>
    //     <Aside />
    //     <div style={{ margin: "0 0 0 7vw"}}>
    //       <h1>Home...</h1>
    //     </div>
    //   </div>
    //   <Footer />
    // </>
  );
}

function VehiculesCard(){

  const [vehiculeToShow, setVehiculeToShow] = useState("1");

  return(
    <Card className="vehicules-card" style={{backgroundColor:"transparent"}}>
    <Card.Header>
      <Nav variant="tabs" justify defaultActiveKey={vehiculeToShow} activeKey={vehiculeToShow} onSelect={(selectedKey) => {
          setVehiculeToShow(selectedKey);
        }}>
        <Nav.Item>
          <Nav.Link eventKey={1}>RoboBoat</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={2}>RoboSub</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={3}>Drone</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={4}>Autonomous Car</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <Card.Body>
      {
        vehiculeToShow === "1" ? (<RoboBoatCard />) :
        vehiculeToShow === "2" ? (<RoboSubCard />) :
        vehiculeToShow === "3" ? (<DroneCard />) :
        (<h1>Autonomous Car</h1>)
      }
    </Card.Body>
  </Card>
  );
}

function RoboBoatCard() {
  return (
    <Row>
      <Col xs={12} md={6}><img className="vehicule-card" src={roboboat} alt="robo boat"/></Col>
      <Col xs={12} md={6}></Col>
    </Row>
  );
}

function RoboSubCard() {
  return (
    <Row>
      <Col xs={12} md={6}><img className="vehicule-card" src={roboboat} alt="robo sub"/></Col>
      <Col xs={12} md={6}></Col>
    </Row>
  );
}

function DroneCard() {
  return (
    <Row>
      <Col xs={12} md={6}><img className="vehicule-card" src={roboboat} alt="drone"/></Col>
      <Col xs={12} md={6}></Col>
    </Row>
  );
}