import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import {Parallax} from "react-parallax";

//photos
import surface from "../../assets/img/jpg/silas-baisch-K785Da4A_JA-unsplash.jpg"
import roboboat from "../../assets/img/png/Screen Shot 2022-05-09 at 18.51.28.png"

import Banner from "../../components/Public/Banner/Banner";
import Footer from "../../components/Public/Footer/Footer";
import Aside from "../../components/Public/Aside/Aside";

//video
import demo from "../../assets/videos/mp4/VanttecCampusVideo.mp4"

import "./Home.scss";

export default function Home() {
  return (
    <Container fluid>
      <Row className="main-banner">
        <Banner video={demo}>
          <h1 style={{ color: "white" }}>LOGO VANTTEC</h1>
        </Banner>
      </Row>

      {/* About */}
      <Parallax className="section" strength={500} bgImage={surface}>
        <Row>
          <Col>
            <Card>
              <Card.Text>
                Pblablabla blablablabla blablablab blabalbala blablababl
              </Card.Text>
            </Card>
          </Col>
          <Col className="center">
            <h2 style={{ color: "white" }}>About Us</h2>
          </Col>
        </Row>
      </Parallax>

      {/* Vehicules */}

      <Row className="section">
        <Col  md={3}>
          <Card className="vehicule-card">
            <Card.Img src={roboboat} alt="RoboBoat" />
            <Card.ImgOverlay className="text-center vehicule-card-overlay">
              <div className="member-card__highlight">
                <span className="info">Vehicule Data</span>
              </div>

              <Card.Title className="text-light"></Card.Title>
              <Card.Text className="description">Vehicules</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col  md={3}>
          <Card className="vehicule-card">
            <Card.Img src={roboboat} alt="RoboBoat" />
            <Card.ImgOverlay className="text-center vehicule-card-overlay">
              <div className="member-card__highlight">
                <span className="info">Vehicule Data</span>
              </div>

              <Card.Title className="text-light"></Card.Title>
              <Card.Text className="description">Vehicules</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col  md={3}>
          <Card className="vehicule-card">
            <Card.Img src={roboboat} alt="RoboBoat" />
            <Card.ImgOverlay className="text-center vehicule-card-overlay">
              <div className="member-card__highlight">
                <span className="info">Vehicule Data</span>
              </div>

              <Card.Title className="text-light"></Card.Title>
              <Card.Text className="description">Vehicules</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="vehicule-card">
            <Card.Img src={roboboat} alt="RoboBoat" />
            <Card.ImgOverlay className="text-center vehicule-card-overlay">
              <div className="member-card__highlight">
                <span className="info">Vehicule Data</span>
              </div>

              <Card.Title className="text-light"></Card.Title>
              <Card.Text className="description">Vehicules</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
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
