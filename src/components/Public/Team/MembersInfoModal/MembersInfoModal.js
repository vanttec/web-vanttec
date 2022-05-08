import React, { useState } from "react";
import {Container, Row, Col, Offcanvas, Carousel } from "react-bootstrap";

import './MembersInfoModal.scss'

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

        <Carousel
          variant="dark"
          indicators={false}
          style={{ height: "100%", width: "100%" }}
          closeButton
        >
          {membersData.map((member) => (
            <Carousel.Item style={{ height: "100%", width: "100%" }}>
              <Container>
                <Row>
                  <Col>
                    <img src={member.contacto.profilePicture.David} />
                  </Col>
                  <Col>
                    <Row>
                      <h1>{`${member.nombre} ${member.apellido}`}</h1>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </Offcanvas>
    </>
  );
}
