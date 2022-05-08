import React, { useState, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";

import "./MembersList.scss";

export default function MembersList(props) {
  const { members, area } = props; //Agarramos la mambers list y el area que queremos
  const [membersData, setMembersData] = useState([]); //Guardamos los usuarios en el area en membersData

  //Checa por algún cambio en members o area
  useEffect(() => {
    const membersList = [];

    //Checamos los miembros en el area
    members.forEach((member) => {
      if (member.infoGeneral.area === area) {
        membersList.push(member);
      }
    });

    //Definimos los miembros actualizados, en membersData
    setMembersData(membersList);
  }, [members, area]);

  return (
    <>
      {membersData.map((member) => (
        <Col sm={12} md={4} lg={3} className="mb-5">
          <Member key={member.matricula} member={member} />
        </Col>
      ))}
    </>
  );
}

function Member(props) {
  const { member } = props;
  console.log(member);
  return (
    <Card className="member-card">
      <Card.Img
        src={member.contacto.profilePicture.David}
        alt={`${member.nombre} ${member.apellido}`}
      />
      <Card.ImgOverlay className="text-center">
        <div className="member-card__highlight">
        <span>See Profile</span>      
        </div>
        <Card.Title className="text-light">{`${member.nombre} ${member.apellido}`}</Card.Title>
        <Card.Text>{member.infoGeneral.puesto}</Card.Text>

      </Card.ImgOverlay>
    </Card>
  );
}
