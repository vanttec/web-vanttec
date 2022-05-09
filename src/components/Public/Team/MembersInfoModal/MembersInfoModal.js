import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Offcanvas,
  Carousel,
  Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ModalBanner from "../ModalBanner/ModalBanner";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./MembersInfoModal.scss";

import mural from "../../../../assets/videos/mp4/VanttecDroneMural.mp4"

export default function MembersInfoModal(props) {
  const { show, setShow, membersData } = props;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Offcanvas
        style={{ height: "100%" }}
        show={show}
        onHide={() => setShow(false)}
        placement="bottom"
      >
        <Offcanvas.Header
          style={{ display: "flex", justifyContent: "flex-end" }}
          closeButton
        ></Offcanvas.Header>
        <div className="modal-align">

        
        <ModalBanner video={mural}>
        <Carousel
          variant="dark"
          indicators={false}
          style={{ height: "100%", width: "100%" }}
          activeIndex={index}
          onSelect={handleSelect}
        >
          {membersData.map((member) => (
            <Carousel.Item style={{ height: "100%", width: "100%" }}>
              <Container fluid>
                <Row>
                  <Col className="info-modal">
                    <Row>
                      <Card className="member-info-card">
                        <Card.Header as="h1">{`${member.nombre} ${member.apellido}`}</Card.Header>
                        <Card.Body>
                          <Card.Title as="h4">Bio</Card.Title>
                          <Card.Text>
                            <div className="member-bio">Poner bio aquí</div>

                            <Card.Title as="h4">About</Card.Title>
                            <div className="member-personal-data">
                              Area: {member.infoGeneral.area}
                              <br />
                              Position: {member.infoGeneral.puesto}
                              <br />
                              Projects: <br />
                              Career: {member.datosPersonales.carrera} <br />
                              Semester: {member.datosPersonales.semestre} <br />
                              Birthplace: {
                                member.datosPersonales.birthplace
                              }{" "}
                              <br />
                            </div>
                            <Card.Title as="h4">Contact</Card.Title>
                            <ContactInfo member={member} />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Col>
                  <Col className="member-img">
                    <img
                      src={member.contacto.profilePicture.David}
                      alt={`${member.nombre} ${member.apellido}`}
                    />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
        </ModalBanner>
        </div>
      </Offcanvas>
      </>
  );
}

function ContactInfo(props) {
  const { member } = props;

  return (
    <>
      <div className="member-social-media">
        <a href={member.contacto.linkedin} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href={member.contacto.github} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href={member.contacto.instagram} target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={member.contacto.facebook} target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href={member.contacto.twitter} target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="member-contact-info">
        <a href={`mailto:${member.contacto.emailInstitucional}`}>
          <span>
            <FontAwesomeIcon icon={faWhatsapp} />
            {member.contacto.whatsapp}
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            {member.contacto.emailInstitucional}
          </span>
        </a>
        <a href={`mailto:${member.contacto.emailPersonal}`}>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            {member.contacto.emailPersonal}
          </span>
        </a>
      </div>
    </>
  );
}
