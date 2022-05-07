import React, {useState, useEffect} from 'react'
import { Col, Card } from 'react-bootstrap'

export default function MembersList(props) {
  const {members, area} = props;
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    const membersList = [];

    members.forEach( (member) => {
      if(member.infoGeneral.area === area){
        membersList.push(member);
      }
    });

    setMembersData(membersList);
    
  }, [members, area])

  return (
    <>
      {
        membersData.map( member => (
          <Col sm={12} md={3} className="mb-5">
            <Member key={member.matricula} member={member}/>
          </Col>
        ))
      }
    </>
  )
}

function Member(props){
  const {member} = props;
  console.log(member);
  return (
    <Card>
      <Card.Img src={member.contacto.profilePicture.David} alt={`${member.nombre} ${member.apellido}`} />
      <Card.ImgOverlay>
        <Card.Title>{`${member.nombre} ${member.apellido}`}</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
