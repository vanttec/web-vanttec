import React from "react";
import { Container, Col, Row, Card, Carousel } from "react-bootstrap";
import { Parallax } from "react-parallax";

//photos
import surface from "../../assets/img/jpg/mathias-p-r-reding-T60yIAqb6qU-unsplash.jpg";
import pattern from "../../assets/img/jpg/andrew-kliatskyi-r4HT6aurLQw-unsplash.jpg";
import roboboat from "../../assets/img/png/Screen Shot 2022-05-09 at 18.51.28.png";
import glitch from "../../assets/img/jpg/glitch-lab-app-2d0Mk82TGI8-unsplash.jpg";
import eugene from "../../assets/img/jpg/eugene-golovesov-o3ioM8u1DuY-unsplash.jpg";
import pavor from "../../assets/img/jpg/pavor-T6kZsf30NW0-unsplash.jpg";

import Banner from "../../components/Public/Banner/Banner";
import Footer from "../../components/Public/Footer/Footer";
import Aside from "../../components/Public/Aside/Aside";

//video
import demo from "../../assets/videos/mp4/VanttecPoolVideo.mp4";

import "./Home.scss";

export default function Home() {
  return (
    <Container fluid>
      <Row className="main-banner">
        <Banner video={demo}>
          <h1 style={{ color: "white" }}>LOGO VANTTEC</h1>
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
        <Parallax strength={800} bgImage={pattern}>
          <Container fluid className="overlay">
            <Row className="section-parallaxbg">
              <h1>Vehicules</h1>

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
        <Parallax strength={800} bgImage={surface}>
          <Container fluid className="overlay">
            <Row className="section-parallaxbg">
              <h1>Team</h1>
              <Carousel>
                <Carousel.Item>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Container>
        </Parallax>
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
