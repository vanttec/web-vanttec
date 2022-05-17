import React from "react";
import { Container, Row, Carousel, Button } from "react-bootstrap";

//videos
import mediaVideo from "../../../../assets/videos/mp4/mediaVideo.mp4";
import perceptionVideo from "../../../../assets/videos/mp4/perceptionVideo.mp4";
import electronicsVideo from "../../../../assets/videos/mp4/electronicsVideo.mp4";
import mechanicsVideo from "../../../../assets/videos/mp4/mechanicsVideo.mp4";
import softwareVideo from "../../../../assets/videos/mp4/softwareVideo.mp4";

import "./TeamAreasCarousel.scss";

export default function TeamAreasCarousel() {
  return (
    <Container fluid>
      <Row className="home-header">
        <h1> Team Areas</h1>
      </Row>
      <Row>
        <Carousel>
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
              <p>Training Neural Networks For Our Vehicules To Perceive The World Around Them</p>
              <Button className="team-carousel-button">See More</Button>
            </Carousel.Caption>
          </Carousel.Item>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button className="team-carousel-button">See More</Button>
            </Carousel.Caption>
          </Carousel.Item>
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
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button className="team-carousel-button">See More</Button>
            </Carousel.Caption>
          </Carousel.Item>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button className="team-carousel-button">See More</Button>
            </Carousel.Caption>
          </Carousel.Item>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button className="team-carousel-button">See More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
