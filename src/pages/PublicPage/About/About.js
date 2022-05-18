import React from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../../../components/Public/Banner/Banner";
import Footer from "../../../components/Public/Footer/Footer";
import MissionVision from "../../../components/Public/About/MissionVision/MissionVision";
import Accomplishments from "../../../components/Public/Home/Accomplishments/Accomplishments";

//video
import demo from "../../../assets/videos/mp4/VanttecPoolVideo.mp4";

export default function About() {
  return (
    <Container fluid>
      {/* Main Banner */}
      <Row className="main-banner">
        <Banner video={demo}>
          <h1>About VantTec</h1>
          <h2 style={{color:"white"}}>Welcome!</h2>
        </Banner>
      </Row>
      {/* Content */}
      <div className="content">
        <div className="division" />
        <MissionVision />
        <Accomplishments/>
        <div className="division" />
        <Footer />
      </div>
    </Container>
  );
}
