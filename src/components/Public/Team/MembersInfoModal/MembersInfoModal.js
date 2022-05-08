import React from 'react'
import {Offcanvas} from 'react-bootstrap'

export default function MembersInfoModal(props) {

  const {show, setShow, membersData} = props;
  console.log(membersData);

  return (
    <>
      <Offcanvas style={{height:"100%"}} show={show} onHide={() => setShow(false)} placement="bottom" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}