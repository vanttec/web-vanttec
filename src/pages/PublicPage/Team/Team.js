import React from "react";
import Banner from "../../../components/Public/Banner/Banner";
import AreaBanner from "../../../components/Public/Team/AreaBanner/AreaBanner";

//Videos

import videoTest from "../../../assets/videos/mp4/VanttecPoolVideo.mp4";
import muralVideo from "../../../assets/videos/mp4/VanttecDroneMural.mp4";
import campusVideo from "../../../assets/videos/mp4/VanttecCampusVideo.mp4";

import { Container, Row } from "react-bootstrap";

import "./Team.scss";

export default function Team() {
  return (
    <Container fluid>
        <Row className="main-banner">
          <Banner video={campusVideo}>
            <h1>Meet The Team</h1>
            <p></p>
          </Banner>
        </Row>

        {/* Perception */}
        <Row className="area-banner">
          <AreaBanner video={videoTest}>
            <h1>Perception</h1>
          </AreaBanner>
        </Row>

        {/* Software */}
        <Row className="area-banner">
          <AreaBanner video={videoTest}>
            <h1>Software</h1>
          </AreaBanner>
        </Row>

        {/* Mechanics */}
        <Row className="area-banner">
          <AreaBanner video={videoTest}>
            <h1>Mechanics</h1>
          </AreaBanner>
        </Row>

        {/* Electronics */}
        <Row className="area-banner">
          <AreaBanner video={videoTest}>
            <h1>Electronics</h1>
          </AreaBanner>
        </Row>
        <Row className="area-banner">
          <AreaBanner video={videoTest}>
            <h1>Hydrophones</h1>
          </AreaBanner>
        </Row>
        <Row className="area-banner">
          <AreaBanner video={videoTest}>
            <h1>Media</h1>
          </AreaBanner>
        </Row>
    </Container>
  );
}
