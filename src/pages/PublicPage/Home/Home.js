import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";

//Components
import Banner from "../../../components/Public/Banner/Banner";
import AboutUs from "../../../components/Public/Home/AboutUs/AboutUs";
import MainVehiculesCard from "../../../components/Public/Home/MainVehiculesCard/MainVehiculesCard";
import TeamAreasCarousel from "../../../components/Public/Home/TeamAreasCarousel/TeamAreasCarousel";

// import Footer from "../../../components/Public/Footer/Footer";
// import Aside from "../../../components/Public/Aside/Aside";

//photos
import logoVantec from "../../../assets/img/png/LogoBlanco_Blanco.png";
import pattern from "../../../assets/img/jpg/andrew-kliatskyi-r4HT6aurLQw-unsplash.jpg";
import roboboat from "../../../assets/img/png/Screen Shot 2022-05-09 at 18.51.28.png";
import pavor from "../../../assets/img/jpg/david-troeger-M8xxVih_V_U-unsplash.jpg";


//video
import demo from "../../../assets/videos/mp4/VanttecDroneMural.mp4";

import "./Home.scss";

export default function Home() {
  return (
    <Container fluid>
      <Row className="main-banner">
        <Banner video={demo}>
          <img className="logo" src={logoVantec} alt="logo vanttec" />
          <h3 style={{ color: "white" }}>
            Research and Development of Autonomous Vehicles
          </h3>
        </Banner>
      </Row>

      <div className="content">
        {/* About */}
        <div className="division"></div>

        <AboutUs />
        <div className="division" />
        <MainVehiculesCard />
        <div className="division" />
        <TeamAreasCarousel/>
        <div className="division" />

      </div>
    </Container>
    // <>
    //   <div style={{ height: "85vh" }}>
    //     <Aside />
    //     <div style={{ margin: "0 0 0 7vw"}}>
    //       <h1>Home...</h1>
    //     </div>
    //   </div>
    //   <Footer />
    // </>
  );
}
