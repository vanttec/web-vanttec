import React, { useState, useEffect } from "react";
import MembersInfoModal from "../MembersInfoModal/MembersInfoModal";
import { Col, Card } from "react-bootstrap";

import "./MembersList.scss";

export default function MembersList(props) {
  const { members, area, video } = props; //Agarramos la mambers list y el area que queremos
  const [membersData, setMembersData] = useState([]); //Guardamos los usuarios en el area en membersData
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  //Checa por algún cambio en members o area
  useEffect(() => {
    const membersList = [];
    //agregar index al member
    let indexes = 0;

    //Checamos los miembros en el area
    members.forEach((member) => {

      //query by just area
      // if (member.infoGeneral.area === area) {
      //   member.index = indexes;
      //   membersList.push(member);
      //   indexes = indexes + 1;
      // }

      //query by area and roboboat
      // if (member.infoGeneral.area === area && member.infoGeneral.proyectos.roboboat) {
      if ( member.infoGeneral.proyectos.roboboat) {
        member.index = indexes;
        membersList.push(member);
        indexes = indexes + 1;
      }
    });

    //Definimos los miembros actualizados, en membersData
    setMembersData(membersList);
  }, [members, area]);

  return (
    <>
      {membersData.map((member) => (
        <Col sm={12} md={3} lg={3} className="mb-5 justify-content-center">
          <Member handleSelect={handleSelect} setShow={setShow} key={member.matricula} member={member} />
        </Col>
      ))}
      <MembersInfoModal video={video} index={index} handleSelect={handleSelect} membersData={membersData} setShow={setShow} show={show}/>
    </>
  );
}

function Member(props) {
  const { member, setShow, handleSelect } = props;

  const onClickMember = () =>{
    handleSelect(member.index);
    setShow(true);
  }
  
  return (
    <Card className="member-card" onClick={() => onClickMember()}>
      <Card.Img
        src={member.profilePicture}
        alt={`${member.nombre} ${member.apellido}`}
      />
      <Card.ImgOverlay className="text-center member-card-overlay">
        <div className="member-card__highlight">
        <span className="info">See Profile</span>      
        </div>

        <Card.Title className="text-light">{`${member.nombre} ${member.apellido}`}</Card.Title>
        <Card.Text className="description">{member.infoGeneral.puesto}</Card.Text>        



      </Card.ImgOverlay>
    </Card>
  );
}
