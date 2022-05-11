import React from "react";
import { Container, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

//Components
import MainVehiculesCard from "../../../components/Public/Home/MainVehiculesCard/MainVehiculesCard";
import TeamAreasCarousel from "../../../components/Public/Home/TeamAreasCarousel/TeamAreasCarousel";
import Banner from "../../../components/Public/Banner/Banner";
// import Footer from "../../../components/Public/Footer/Footer";
// import Aside from "../../../components/Public/Aside/Aside";

//photos
import logoVantec from "../../../assets/img/png/LogoBlanco_Blanco.png";
import pattern from "../../../assets/img/jpg/andrew-kliatskyi-r4HT6aurLQw-unsplash.jpg";
import roboboat from "../../../assets/img/png/Screen Shot 2022-05-09 at 18.51.28.png";
import pavor from "../../../assets/img/jpg/david-troeger-M8xxVih_V_U-unsplash.jpg";


//video
import demo from "../../../assets/videos/mp4/VanttecDroneMural.mp4";

import "./Home.scss";

export default function Home() {
  return (
    <Container fluid>
      <Row className="main-banner">
        <Banner video={demo}>
          <img className="logo" src={logoVantec} alt="logo vanttec" />
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
              <MainVehiculesCard />
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
            <TeamAreasCarousel />
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
