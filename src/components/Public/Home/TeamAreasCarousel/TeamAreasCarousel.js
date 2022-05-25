import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Carousel, Button } from "react-bootstrap";


import "./TeamAreasCarousel.scss";

export default function TeamAreasCarousel() {
  return (
    <Container fluid>
      <Row className="home-header">
        <h2> Team Areas</h2>
      </Row>
      <Row>
        <Carousel>
          {/* Mechanics */}
          <Carousel.Item>
          <div className="overlay-area-home wrapper">
            {/* 
              <video
                className="d-block w-100"
                src={mechanicsVideo}
                autoPlay
                loop
                muted
              /> */}
              <ReactPlayer
                url={"https://vimeo.com/713521066"}
                width="100%"
                height="100vh"
                muted={true}
                loop={true}
                playing={true}
              />
            </div>
            <Carousel.Caption>
              <h3>Mechanics</h3>
              <p>Vehicle Design and Manufacturing</p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>

          {/* Media */}
          <Carousel.Item>
          <div className="overlay-area-home wrapper">
            {/* 
              <video
                className="d-block w-100"
                src={mechanicsVideo}
                autoPlay
                loop
                muted
              /> */}
              <ReactPlayer
                url={"https://vimeo.com/713521087"}
                width="100%"
                height="100vh"
                muted={true}
                loop={true}
                playing={true}
              />
            </div>
            <Carousel.Caption>
              <h3>Media</h3>
              <p>
                Representing the Team and what it stands for, on social media
                and its website.
              </p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>

          {/* Electronics */}
          <Carousel.Item>
          <div className="overlay-area-home wrapper">
            {/* 
              <video
                className="d-block w-100"
                src={mechanicsVideo}
                autoPlay
                loop
                muted
              /> */}
              <ReactPlayer
                url={"https://vimeo.com/713521161"}
                width="100%"
                height="100vh"
                muted={true}
                loop={true}
                playing={true}
              />
            </div>
            <Carousel.Caption>
              <h3>Electronics</h3>
              <p>
                Design of Power Systems and Integration of Modules such as
                Sensors, Computers and Actuators
              </p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          {/* Perception */}
          <Carousel.Item>
          <div className="overlay-area-home wrapper">
            {/* 
              <video
                className="d-block w-100"
                src={mechanicsVideo}
                autoPlay
                loop
                muted
              /> */}
              <ReactPlayer
                url={"https://vimeo.com/713521215"}
                width="100%"
                height="100vh"
                muted={true}
                loop={true}
                playing={true}
              />
            </div>
            <Carousel.Caption>
              <h3>Perception</h3>
              <p>
                Train Neural Networks to Enable our Vehicules To Perceive The
                World Around Them through Sensors Such as Lidar, Hydrophones and
                Stereo Cameras.
              </p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>

          {/* Software */}
          <Carousel.Item>
          <div className="overlay-area-home wrapper">
            {/* 
              <video
                className="d-block w-100"
                src={mechanicsVideo}
                autoPlay
                loop
                muted
              /> */}
              <ReactPlayer
                url={"https://vimeo.com/713521317"}
                width="100%"
                height="100vh"
                muted={true}
                loop={true}
                playing={true}
              />
            </div>
            <Carousel.Caption>
              <h3>Software</h3>
              <p>
                Development of Algorithms. Based on Systems from Perception,
                Control and Localization. To Enable our Vehicules to do their
                Tasks efficiently an Conquer the Challenges in each
                Competitions.
              </p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>

          {/* Localization */}
          <Carousel.Item>
          <div className="overlay-area-home wrapper">
            {/* 
              <video
                className="d-block w-100"
                src={mechanicsVideo}
                autoPlay
                loop
                muted
              /> */}
              <ReactPlayer
                url={"https://vimeo.com/713521030"}
                width="100%"
                height="100vh"
                muted={true}
                loop={true}
                playing={true}
              />
            </div>
            <Carousel.Caption>
              <h3>Localization</h3>
              <p>
                Estimate States Such as Position, Speed and Orientation of a
                Vehicle with Different Sensors such as IMU, DVL, GPS and
                Barometers
              </p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>

          {/* Business */}
          <Carousel.Item>
          <div className="overlay-area-home wrapper">
            {/* 
              <video
                className="d-block w-100"
                src={mechanicsVideo}
                autoPlay
                loop
                muted
              /> */}
              <ReactPlayer
                url={"https://vimeo.com/713520819"}
                width="100%"
                height="100vh"
                muted={true}
                loop={true}
                playing={true}
              />
            </div>
            <Carousel.Caption>
              <h3>Business</h3>
              <p>
                Getting Sponsorships and Finding Ways to Support Team Projects{" "}
              </p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>

          {/* Control */}
          <Carousel.Item>
          <div className="overlay-area-home wrapper">
            {/* 
              <video
                className="d-block w-100"
                src={mechanicsVideo}
                autoPlay
                loop
                muted
              /> */}
              <ReactPlayer
                url={"https://vimeo.com/713520892"}
                width="100%"
                height="100vh"
                muted={true}
                loop={true}
                playing={true}
              />
            </div>
            <Carousel.Caption>
              <h3>Control</h3>
              <p>
                Generate Signals for Vehicles Engines Based on References Such
                as Position Speed and Orientation.
              </p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
