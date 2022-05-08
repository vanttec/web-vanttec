import React, {useState} from 'react'
import {Offcanvas, Carousel} from 'react-bootstrap'

export default function MembersInfoModal(props) {

  const {show, setShow, membersData} = props;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Offcanvas style={{height:"100%"}} show={show} onHide={() => setShow(false)} placement="bottom" >
        <Offcanvas.Header style={{display:"flex", justifyContent:"flex-end"}} closeButton>
        </Offcanvas.Header>

        <Carousel style={{height:"100%", width:"100%", backgroundColor:"black"}} closeButton>
          {
            membersData.map( member => (
              <MemberCarouselItem member={member} />
            ))
          }
        </Carousel>

      </Offcanvas>
    </>
  );
}


function MemberCarouselItem(props){
  const {member} = props;
  return(

    <Carousel.Item>
    <img
      className="d-block w-100"
      src={member.contacto.profilePicture.David}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{`${member.nombre} ${member.apellido}`}</h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>

  );
}