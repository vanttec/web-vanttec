import React from "react";
import Banner from "../../../components/Public/Banner/Banner";
import AreaBanner from "../../../components/Public/Team/AreaBanner/AreaBanner";
import videoTest from "../../../assets/videos/mp4/TerniumAnimation.mp4";
import { Container, Row, Col } from "react-bootstrap";

import "./Team.scss";

export default function Team() {
  return (
    <Container fluid>
        <Row className="main-banner">
          <Banner video={videoTest}>
            <h1>Meet The Team</h1>
          </Banner>
        </Row>
        <Row className="area-banner">
          <AreaBanner video={videoTest}>
            <h1>Area</h1>
          </AreaBanner>
        </Row>
    </Container>
  );
}
