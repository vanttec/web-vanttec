import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Offcanvas, Carousel, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ModalBanner from '../ModalBanner/ModalBanner'
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import './MembersInfoModal.scss'

export default function MembersInfoModal(props) {
  const { show, setShow, membersData, index, handleSelect, video } = props
  const [activeIndex, setActiveIndex] = useState(index)

  useEffect(() => {
    setActiveIndex(index)
  }, [index])

  return (
    <>
      <Offcanvas
        style={{ height: '100%' }}
        show={show}
        onHide={() => setShow(false)}
        placement="bottom"
      >
        <Offcanvas.Header
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          closeButton
        ></Offcanvas.Header>
        <Container>
          <ModalBanner video={video}>
            <Carousel
              fade
              indicators={false}
              activeIndex={activeIndex}
              onSelect={handleSelect}
            >
              {membersData.map((member) => (
                <Carousel.Item className="carousel-item-member">
                  <Row className="carousel-item-member-row">
                    <Col xs={12} md={6} className="member-img">
                      <img
                        src={member.profilePicture}
                        alt={`${member.nombre} ${member.apellido}`}
                      />
                    </Col>
                    <Col xs={12} md={6} className="info-modal">
                      <Card className="member-info-card">
                        <Card.Header as="h1">{`${member.nombre} ${member.apellido}`}</Card.Header>
                        <Card.Body className="member-card-body">
                          <div className="member-bio">
                            {/* <Card.Title as="h4">Bio</Card.Title> */}
                            <Card.Text>{member.bio}</Card.Text>
                          </div>
                          <div className="member-personal-data">
                            <Card.Title as="h4">About</Card.Title>
                            <Card.Text>
                              Position: {member.infoGeneral.puesto}
                              <br />
                              Area: {member.infoGeneral.area}
                              <br />
                              {/* Projects: <br /> */}
                              {member.datosPersonales.carrera} |{' '}
                              {member.datosPersonales.semestre}th Semester{' '}
                              <br />
                              Birthplace: {
                                member.datosPersonales.birthplace
                              }{' '}
                              <br />
                            </Card.Text>
                          </div>
                          <div className="member-contact-card">
                            <Card.Text>
                              <Card.Title as="h4">Contact</Card.Title>
                              <ContactInfo member={member} />
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </ModalBanner>
        </Container>
      </Offcanvas>
    </>
  )
}

function ContactInfo(props) {
  const { member } = props

  return (
    <Row>
      <Col xs={12} md={5} className="member-social-media">
        <div>
          <a href={member.contacto.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href={member.contacto.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a href={member.contacto.instagram} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={member.contacto.facebook} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={member.contacto.twitter} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </Col>
      <Col xs={12} md={7} className="member-contact-information">
        <a href="">
          <span>
            {/* <FontAwesomeIcon icon={faWhatsapp} />
            <p>{member.contacto.whatsapp}</p> */}
          </span>
        </a>
        <a href={`mailto:${member.contacto.emailInstitucional}`}>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{member.contacto.emailInstitucional}</p>
          </span>
        </a>
        <a href={`mailto:${member.contacto.emailPersonal}`}>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{member.contacto.emailPersonal}</p>
          </span>
        </a>
      </Col>
    </Row>
  )
}
