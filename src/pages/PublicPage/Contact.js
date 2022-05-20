import React from "react";
import {Container, Row} from "react-bootstrap";
import Banner from "../../components/Public/Banner/Banner";
import ContactInfo from "../../components/Public/Contact/ContactInfo";
import Footer from "../../components/Public/Footer/Footer";

//video
import videoCampus from "../../assets/videos/mp4/VanttecCampusVideoo.mp4";

export default function Contact() {
  return (
    <Container fluid>
      <Row className="main-banner">
        <Banner video={videoCampus}>
          <h1>Contact</h1>
        </Banner>
      </Row>

      <div className="content">
        <ContactInfo />
        <Footer />
      </div>
    </Container>
  );
}