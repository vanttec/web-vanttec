import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import mission from "../../../../assets/img/jpg/competencia.jpg";

//photos
import firstPhoto from "../../../../assets/img/jpg/first2017.JPG";
import secondPhoto from "../../../../assets/img/jpg/second2017.jpg";
import thirdPhoto from "../../../../assets/img/jpg/2017_3.JPG";
import fourthPhoto from "../../../../assets/img/jpg/2017_4.jpg";
import fifthPhoto from "../../../../assets/img/jpg/2018.jpg";
import sixthPhoto from "../../../../assets/img/jpg/2018_2.jpg";
import seventhPhoto from "../../../../assets/img/jpg/2019.jpg";
import eightPhoto from "../../../../assets/img/jpg/2019_1.jpg";
import ninePhoto from "../../../../assets/img/jpg/2020_1.png";
import tenthPhoto from "../../../../assets/img/jpg/2020_2.png";
import elevenPhoto from "../../../../assets/img/jpg/2020_3.jpeg";
import twelvePhoto from "../../../../assets/img/jpg/2021.jpg";

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
              <img className="d-block w-100" src={firstPhoto} alt="team emerged as a multidisciplinary project" />
            </div>

            <Carousel.Caption>
              <p>
                The team emerged as a multidisciplinary project with
                undergraduate and graduate students interested in researching
                new technologies revolutionizing the field of STEM.
              </p>
              <h2>2017</h2>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={secondPhoto} alt="the first project
                was developed: an autonomous unmanned boat." />
            </div>

            <Carousel.Caption>
              <p>
                With graduate student Pedro Fonseca as the leader, together with
                Juan Carlos Aguilera, the team was formed and the first project
                was developed: an autonomous unmanned boat.
              </p>
              <h2>2017</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={thirdPhoto} alt="a legacy began" />
            </div>

            <Carousel.Caption>
              <p>
                The team traveled to Florida to compete internationally, where
                after this first competition, a legacy began.
              </p>
              <h2>2017</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={fourthPhoto} alt="team members
                became a recognized group of autonomous vehicle research" />
            </div>

            <Carousel.Caption>
              <p>
                In this way, the small experiment done by the team members
                became a recognized group of autonomous vehicle research on
                campus.
              </p>
              <h2>2017</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={fifthPhoto} alt="team required to set the ground for further generations." />
            </div>

            <Carousel.Caption>
              <p>
                With young leaders, Alex González
                and Pedro Sánchez, first time in charge. This was a major
                challenge for the team. As all of the older members graduating,
                the team required to set the ground for further generations.
              </p>
              <h2>2018</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={sixthPhoto} alt="A second time competing internationally
                against top universities" />
            </div>

            <Carousel.Caption>
              <p>
                What was the result? A second time competing internationally
                against top universities, going to Florida with all of our flaws
                to prove that we could keep on... And won an award.{" "}
              </p>
              <h2>2018</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={seventhPhoto} alt="The first time we reached the finals." />
            </div>

            <Carousel.Caption>
              <p>
                The first time we reached the finals. The team finished in 5th
                place after a great performance in the qualifiers.
              </p>
              <h2>2019</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={eightPhoto} alt="Setting us up for 2020." />
            </div>

            <Carousel.Caption>
              <p>
                Proud of ourselves. We advanced miles in comparison to
                the previous years. Our technology and our team had evolved.
                Under the leadership of Alex, we became a solid group and our
                research started to bloom. Setting us up for 2020.
              </p>
              <h2>2019</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={elevenPhoto} alt="RoboBoat and RoboSub 2020 resorted to being celebrated online" />
            </div>

            <Carousel.Caption>
              <p>
              Due to the COVID-19 pandemic, RoboBoat and RoboSub 2020 resorted to being celebrated online without an on-place competition and social-distancing measures encouraged.
              </p>
              <h2>2020</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={ninePhoto} alt="Team Achieved 1st place Overall Standing" />
            </div>

            <Carousel.Caption>
              <p>
                The Team Achieved 1st place Overall Standing in the Roboboat competition and 3th place in Robosub.
                Including Other 6 Awards.
              </p>
              <h2>2020</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={tenthPhoto} alt="Rómulo Garza award" />
            </div>

            <Carousel.Caption>
              <p>
              We were awarded the Rómulo Garza award for our focus on researching issues related to autonomous vehicles.
              </p>
              <h2>2020</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay-area-about">
              <img className="d-block w-100" src={twelvePhoto} alt="VantTec continued operations throughout online meetings and deliveries" />
            </div>

            <Carousel.Caption>
              <p>
              Due to the COVID-19 pandemic, As we continue to be on lockdown, VantTec continued operations throughout online meetings and deliveries through virtual testing.             
              </p>
              <h2>2021</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
