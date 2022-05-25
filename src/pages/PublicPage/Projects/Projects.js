import React from 'react'
import { Container, Row } from "react-bootstrap";
import Banner from '../../../components/Public/Banner/Banner';
import ProjectsNav from '../../../components/Public/Projects/ProjectsNav/ProjectsNav.js';
import Footer from '../../../components/Public/Footer/Footer';

//video
import demo from '../../../assets/videos/mp4/VanttecPoolVideo.mp4';

export default function Projects() {
  return (
    <Container fluid>
      {/* Main Banner */}
      <Row className="main-banner">
        <Banner video={"https://player.vimeo.com/video/713520857"}>
          <h1>Projects</h1>
        </Banner>
      </Row>
      {/* Content */}
      <div className="content">
        <div className="division" />
        <ProjectsNav />
        <Footer />
      </div>
    </Container>
  )
}
