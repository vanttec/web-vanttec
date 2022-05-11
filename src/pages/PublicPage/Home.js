import React from "react";
import { Container, Col, Row, Card, Carousel, Nav } from "react-bootstrap";
import { Parallax } from "react-parallax";

//photos
import logoVantec from "../../assets/img/png/LogoBlanco_Blanco.png";
import surface from "../../assets/img/jpg/Screen Shot 2022-05-11 at 2.37.32.png";
import pattern from "../../assets/img/jpg/andrew-kliatskyi-r4HT6aurLQw-unsplash.jpg";
import roboboat from "../../assets/img/png/Screen Shot 2022-05-09 at 18.51.28.png";
import glitch from "../../assets/img/jpg/glitch-lab-app-2d0Mk82TGI8-unsplash.jpg";
import eugene from "../../assets/img/jpg/eugene-golovesov-o3ioM8u1DuY-unsplash.jpg";
import pavor from "../../assets/img/jpg/david-troeger-M8xxVih_V_U-unsplash.jpg";

import Banner from "../../components/Public/Banner/Banner";
import Footer from "../../components/Public/Footer/Footer";
import Aside from "../../components/Public/Aside/Aside";

//video
import demo from "../../assets/videos/mp4/VanttecDroneMural.mp4";

import "./Home.scss";

export default function Home() {
  return (
    <Container fluid>
      <Row className="main-banner">
        <Banner video={demo}>
          
          <img className="logo" src={logoVantec} />
          <h3 style={{color:"white"}}>Research and Development of Autonomous Vehicles</h3>
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
              <h1>Vehicules</h1>
              {/* <Carousel fade>
                <Carousel.Item>
                  <Carousel.Caption>
                    <Container>
                      <Row>
                        <Col>
                          <img src={roboboat} className="vehicule-card" />
                        </Col>
                        <Col>
                          <h2>Roboboat</h2>
                          <ul>
                            <li>Stat1</li>
                            <li>Stat2</li>
                            <li>Stat3</li>
                            <li>Stat4</li>
                          </ul>
                        </Col>
                      </Row>
                    </Container>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <Container className="d-block w-100">
                      <Row >
                        <Col>
                          <img src={roboboat} className="vehicule-card" />
                        </Col>
                        <Col>
                          <h2>Robosub</h2>
                          <ul>
                            <li>Stat1</li>
                            <li>Stat2</li>
                            <li>Stat3</li>
                            <li>Stat4</li>
                          </ul>
                        </Col>
                      </Row>
                    </Container>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <Container>
                      <Row>
                        <Col>
                          <img src={roboboat} className="vehicule-card" />
                        </Col>
                        <Col>
                          <h2>Drone</h2>
                          <ul>
                            <li>Stat1</li>
                            <li>Stat2</li>
                            <li>Stat3</li>
                            <li>Stat4</li>
                          </ul>
                        </Col>
                      </Row>
                    </Container>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <Container>
                      <Row>
                        <Col>
                          <img src={roboboat} className="vehicule-card" />
                        </Col>
                        <Col>
                          <h2>Car</h2>
                          <ul>
                            <li>Stat1</li>
                            <li>Stat2</li>
                            <li>Stat3</li>
                            <li>Stat4</li>
                          </ul>
                        </Col>
                      </Row>
                    </Container>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel> */}
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
            </Row>
          </Container>
        </Parallax>

        {/* Team */}
        <div className="division"></div>
        <Container fluid className="overlay">
        <Row className="section-parralaxbg" style={{backgroundColor:"white"}}>
          <h1>Team Areas</h1>
          <Carousel fade variant="dark">
            <Carousel.Item>
              <video className="d-block w-100" src={demo} autoPlay loop muted />
              <Carousel.Caption>
                <h3>Perception</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <video className="d-block w-100" src={demo} autoPlay loop muted />
              <Carousel.Caption>
                <h3>Software</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <video className="d-block w-100" src={demo} autoPlay loop muted />
              <Carousel.Caption>
                <h3>Mechanics</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <video className="d-block w-100" src={demo} autoPlay loop muted />
              <Carousel.Caption>
                <h3>Electronics</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <video className="d-block w-100" src={demo} autoPlay loop muted />
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
