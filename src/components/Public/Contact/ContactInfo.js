import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import './ContactInfo.scss'

export default function ContactInfo() {
  return (
    <Container
      fluid
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      className="hover-effect"
    >
      <Row className="contact-row">
        {/* Contact Info */}
        <Col xs={12} md={6} >
          <div className="vanttec-contact">

            {/* Dr. Leonardo Garrido */}
          <h3>Faculty Advisor</h3>
          <p>Dr. Leonardo Garrido</p>
          <a href="mailto:leonardo.garrido@itesm.mx">
            <p>leonardo.garrido@itesm.mx</p>
          </a>

          {/* Vanttec President */}
          <h3>Vanttec President</h3>
          <p>Andrés Sánchez</p>
          <a href="mailto:A01351370@tec.mx">
            <p>A01351370@tec.mx</p>
          </a>
          
        {/* Vanttec */}
          <h3>Vanttec</h3>
          <a href="mailto:vanttecmty@gmail.com">
            <p>vanttecmty@gmail.com</p>
          </a>
          <a href="mailto:vanttec@servicios.tec.mx">
            <p>vanttec@servicios.tec.mx</p>
          </a>
          
          </div>
        </Col>

        {/* Map */}
        <Col xs={12} md={6} className="vanttec-contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998.8277953573172!2d-100.29104255549173!3d25.65077644851632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd5c08d577d6b08c1!2zMjXCsDM5JzAxLjIiTiAxMDDCsDE3JzI3LjgiVw!5e0!3m2!1ses!2smx!4v1653110506691!5m2!1ses!2smx"
            width="500"
            height="500"
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
            title="Vanttec"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
