import React from 'react'
import {Container, Row} from 'react-bootstrap'
import { Parallax } from "react-parallax";

//background photos
import pattern from "../../../../assets/img/jpg/andrew-kliatskyi-r4HT6aurLQw-unsplash.jpg";

export default function AboutUs() {
  return (
    <Parallax strength={800} bgImage={pattern}>
      <Container fluid>
        <Row className='home-header'>
          <h1>About Us</h1>
        </Row>
        <Row></Row>
      </Container>
    </Parallax>
  );
}
