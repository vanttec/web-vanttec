import React from "react";
import { Container, Row, Carousel, Button } from "react-bootstrap";

//videos
import mediaVideo from "../../../../assets/videos/mp4/mediaVideo.mp4";
import perceptionVideo from "../../../../assets/videos/mp4/perceptionVideo.mp4";
import electronicsVideo from "../../../../assets/videos/mp4/electronicsVideo.mp4";
import mechanicsVideo from "../../../../assets/videos/mp4/mechanicsVideo.mp4";
import softwareVideo from "../../../../assets/videos/mp4/softwareVideo.mp4";
import controlVideo from "../../../../assets/videos/mp4/controlVideo.mp4";
import locationVideo from "../../../../assets/videos/mp4/locVideo.mp4";
import businessVideo from "../../../../assets/videos/mp4/businessVideo.mp4";

import "./TeamAreasCarousel.scss";

export default function TeamAreasCarousel() {
  return (
    <Container fluid>
      <Row className="home-header">
        <h2> Team Areas</h2>
      </Row>
      <Row>
        <Carousel>
          {/* Perception */}
          <Carousel.Item>
            <div className="overlay-area-home">
              <video
                className="d-block w-100"
                src={perceptionVideo}
                autoPlay
                loop
                muted
              />
            </div>
            <Carousel.Caption>
              <h3>Perception</h3>
              <p>
                Train Neural Networks to Enable our Vehicules To Perceive The World Around Them through
                Sensors Such as Lidar, Hydrophones and Stereo Cameras.
              </p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>

          {/* Software */}
          <Carousel.Item>
            <div className="overlay-area-home">
              <video
                className="d-block w-100"
                src={softwareVideo}
                autoPlay
                loop
                muted
              />
            </div>
            <Carousel.Caption>
              <h3>Software</h3>
              <p>
                Development of Algorithms. Based on Systems from Perception,
                Control and Localization. To Enable our Vehicules to do their Tasks efficiently an Conquer the
                Challenges in each Competitions.
              </p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>

          {/* Control */}
          <Carousel.Item>
            <div className="overlay-area-home">
              <video
                className="d-block w-100"
                src={controlVideo}
                autoPlay
                loop
                muted
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

          {/* Location */}
          <Carousel.Item>
            <div className="overlay-area-home">
              <video
                className="d-block w-100"
                src={locationVideo}
                autoPlay
                loop
                muted
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

          {/* Mechanics */}
          <Carousel.Item>
            <div className="overlay-area-home">
              <video
                className="d-block w-100"
                src={mechanicsVideo}
                autoPlay
                loop
                muted
              />
            </div>
            <Carousel.Caption>
              <h3>Mechanics</h3>
              <p>Vehicle Design and Manufacturing</p>
              {/* <Button className="team-carousel-button">See Members</Button> */}
            </Carousel.Caption>
          </Carousel.Item>

          {/* Electronics */}
          <Carousel.Item>
            <div className="overlay-area-home">
              <video
                className="d-block w-100"
                src={electronicsVideo}
                autoPlay
                loop
                muted
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

          {/* Business */}
          <Carousel.Item>
            <div className="overlay-area-home">
              <video
                className="d-block w-100"
                src={businessVideo}
                autoPlay
                loop
                muted
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

          {/* Media */}
          <Carousel.Item>
            <div className="overlay-area-home">
              <video
                className="d-block w-100"
                src={mediaVideo}
                autoPlay
                loop
                muted
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
        </Carousel>
      </Row>
    </Container>
  );
}
