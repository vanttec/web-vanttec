import React from "react";
import { Container, Row } from "react-bootstrap";

//Components
import Banner from "../../../components/Public/Banner/Banner";
import AboutUs from "../../../components/Public/Home/AboutUs/AboutUs";
import MainVehiculesCard from "../../../components/Public/Home/MainVehiculesCard/MainVehiculesCard";
import Accomplishments from "../../../components/Public/Home/Accomplishments/Accomplishments";
import TeamAreasCarousel from "../../../components/Public/Home/TeamAreasCarousel/TeamAreasCarousel";
import Sponsors from "../../../components/Public/Home/Sponsors/Sponsors";

// import Footer from "../../../components/Public/Footer/Footer";
// import Aside from "../../../components/Public/Aside/Aside";

//photos
import logoVantec from "../../../assets/img/png/LogoBlanco_Blanco.png";


//video
import demo from "../../../assets/videos/mp4/VanttecDroneMural.mp4";

import "./Home.scss";

export default function Home() {
  return (
    
    <Container fluid>
      {/* Banner */}
      <Row className="main-banner">
        <Banner video={demo}>
          <img className="logo" src={logoVantec} alt="logo vanttec" />
          <h3 style={{ color: "white" }}>
            Research and Development of Autonomous Vehicles
          </h3>
        </Banner>
      </Row>

      {/* Content */}
      <div className="content">

        <div className="division" />
        <AboutUs />
        <div className="division" />
        <MainVehiculesCard />
        <div className="division" />
        <Accomplishments/>
        <div className="division" />
        <TeamAreasCarousel/>
        <div className="division" />
        <Sponsors />

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
