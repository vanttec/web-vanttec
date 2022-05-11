import React from 'react'
import {Carousel} from 'react-bootstrap'
import mediaVideo from "../../../../assets/videos/mp4/mediaVideo.mp4";
import perceptionVideo from "../../../../assets/videos/mp4/perceptionVideo.mp4";
import electronicsVideo from "../../../../assets/videos/mp4/electronicsVideo.mp4";
import mechanicsVideo from "../../../../assets/videos/mp4/mechanicsVideo.mp4";
import softwareVideo from "../../../../assets/videos/mp4/softwareVideo.mp4";

import './TeamCarousel.scss';

export default function TeamAreasCarousel() {
  return (
<Carousel fade indicators={false}>
              <Carousel.Item>
                <video
                  className="d-block w-100"
                  src={perceptionVideo}
                  autoPlay
                  loop
                  muted
                />
                <Carousel.Caption>
                  <h3>Perception</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="overlay">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="overlay">
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
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="overlay">
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
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="overlay">
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
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
  )
}
