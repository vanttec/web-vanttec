import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import mission from "../../../../assets/img/jpg/competencia.jpg";

import './History.scss';

export default function History() {
  return (
    <Container fluid>
      <Row className="home-header">
        <h2> Our History</h2>
      </Row>
      <Row>
        <Carousel>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
                The team emerged as a multidisciplinary project with
                undergraduate and graduate students interested in researching
                new technologies revolutionizing the field of STEM.
              </h3>
              <h2>2017</h2>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
                With graduate student Pedro Fonseca as the leader, together with
                Juan Carlos Aguilera, the team was formed and the first project
                was developed: an autonomous unmanned boat.
              </h3>
              <h2>2017</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
                The team traveled to Florida to compete internationally, where
                after this first competition, a legacy began.
              </h3>
              <h2>2017</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
                In this way, the small experiment done by the team members
                became a recognized group of autonomous vehicle research on
                campus.
              </h3>
              <h2>2017</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
                With young leaders, Alex González
                and Pedro Sánchez, first time in charge. This was a major
                challenge for the team. As all of the older members graduating,
                the team required to set the ground for further generations.
              </h3>
              <h2>2018</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
                What was the result? A second time competing internationally
                against top universities, going to Florida with all of our flaws
                to prove that we could keep on... And won an award.{" "}
              </h3>
              <h2>2018</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
                The first time we reached the finals. The team finished in 5th
                place after a great performance in the qualifiers.
              </h3>
              <h2>2019</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
                Proud of ourselves. We advanced miles in comparison to
                the previous years. Our technology and our team had evolved.
                Under the leadership of Alex, we became a solid group and our
                research started to bloom. Setting us up for 2020.
              </h3>
              <h2>2019</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
              Due to the COVID-19 pandemic, RoboBoat and RoboSub 2020 resorted to being celebrated online without an on-place competition and social-distancing measures encouraged.
              </h3>
              <h2>2020</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
                The Team Achieved 1st place Overall Standing in the Roboboat competition and 3th place in Robosub.
                Including Other 6 Awards.
              </h3>
              <h2>2020</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
              We were awarded the Rómulo Garza award for our focus on researching issues related to autonomous vehicles.
              </h3>
              <h2>2020</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={mission} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>
              Due to the COVID-19 pandemic, As we continue to be on lockdown, VantTec continued operations throughout online meetings and deliveries through virtual testing.             
              </h3>
              <h2>2021</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
