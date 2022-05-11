import React, {useState}  from 'react'
import {Card, Nav, Row, Col} from 'react-bootstrap'
import roboboat from '../../../../assets/img/png/Screen Shot 2022-05-09 at 18.51.28.png'

import './MainVehiculesCard.scss'

export default function MainVehiculesCard(){

    const [vehiculeToShow, setVehiculeToShow] = useState("1");
  
    return(
      <Card className="vehicules-card" style={{backgroundColor:"transparent"}}>
      <Card.Header>
        <Nav variant="pills" justify defaultActiveKey={vehiculeToShow} activeKey={vehiculeToShow} onSelect={(selectedKey) => {
            setVehiculeToShow(selectedKey);
          }}>
          <Nav.Item className='vehicule-item'>
            <Nav.Link  eventKey={1}>RoboBoat</Nav.Link>
          </Nav.Item>
          <Nav.Item className='vehicule-item'>
            <Nav.Link eventKey={2}>RoboSub</Nav.Link>
          </Nav.Item>
          <Nav.Item className='vehicule-item'>
            <Nav.Link eventKey={3}>Drone</Nav.Link>
          </Nav.Item>
          <Nav.Item className='vehicule-item'>
            <Nav.Link eventKey={4}>Autonomous Car</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body className='vehicules-card-body'>
        {
          vehiculeToShow === "1" ? (<RoboBoatCard />) :
          vehiculeToShow === "2" ? (<RoboSubCard />) :
          vehiculeToShow === "3" ? (<DroneCard />) :
          (<h1>Autonomous Car</h1>)
        }
      </Card.Body>
    </Card>
    );
  }
  
  function RoboBoatCard() {
    return (
      <Row className='vehicules-card-row'>
        <Col xs={12} md={6}><img className="vehicule-card" src={roboboat} alt="robo boat"/></Col>
        <Col xs={12} md={6}></Col>
      </Row>
    );
  }
  
  function RoboSubCard() {
    return (
      <Row className='vehicules-card-row'>
        <Col xs={12} md={6}><img className="vehicule-card" src={roboboat} alt="robo sub"/></Col>
        <Col xs={12} md={6}></Col>
      </Row>
    );
  }
  
  function DroneCard() {
    return (
      <Row className='vehicules-card-row'>
        <Col xs={12} md={6}><img className="vehicule-card" src={roboboat} alt="drone"/></Col>
        <Col xs={12} md={6}></Col>
      </Row>
    );
  }