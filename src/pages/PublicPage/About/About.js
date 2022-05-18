import React from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../../../components/Public/Banner/Banner";
import Footer from "../../../components/Public/Footer/Footer";
import MissionVision from "../../../components/Public/About/MissionVision/MissionVision";
import Values from "../../../components/Public/About/Values/Values";

//video
import demo from "../../../assets/videos/mp4/VanttecDroneMural.mp4";

export default function About() {
  return (
    <Container fluid>
      {/* Main Banner */}
      <Row className="main-banner">
        <Banner video={demo}>
          <h1>Welcome!</h1>
        </Banner>
      </Row>
      {/* Content */}
      <div className="content">
        <div className="division" />
        <MissionVision />
        <div className="division" />
        <Values />
        <div className="division" />
        <Footer />
      </div>
    </Container>
  );
}
