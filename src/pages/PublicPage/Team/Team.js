import React from "react";
import Banner from "../../../components/Public/Banner/Banner";
import AreaBanner from "../../../components/Public/Team/AreaBanner/AreaBanner";
import MembersList from "../../../components/Public/Team/MembersList/MembersList";
import Footer from "../../../components/Public/Footer/Footer";
import { Parallax } from "react-parallax";

//Videos
import muralVideo from "../../../assets/videos/mp4/VanttecDroneMural.mp4";
import teamVideo from "../../../assets/videos/mp4/teamBackgroundOfficial.mp4";
import mediaVideo from "../../../assets/videos/mp4/mediaVideo.mp4";
import perceptionVideo from "../../../assets/videos/mp4/perceptionVideo.mp4";
import electronicsVideo from "../../../assets/videos/mp4/electronicsVideo.mp4";
import mechanicsVideo from "../../../assets/videos/mp4/mechanicsVideo.mp4";
import softwareVideo from "../../../assets/videos/mp4/softwareVideo.mp4";
import controlVideo from "../../../assets/videos/mp4/controlVideo.mp4";
import locationVideo from "../../../assets/videos/mp4/locVideo.mp4";
import businessVideo from "../../../assets/videos/mp4/businessVideo.mp4";

//Imagenes
import David from "../../../assets/img/jpeg/Yo.jpg";
import demo from "../../../assets/img/jpg/backgroundwhite.png";

import { Container, Row } from "react-bootstrap";

import "./Team.scss";

export default function Team() {
  const testMembers = [
    {
      matricula: "A01235692",
      nombre: "David Gerardo",
      apellido: "Martínez Hidrogo",
      datosPersonales: {
        carrera: "ITC",
        semestre: "4to",
        birthplace: "Torreón, Coahuila",
        birthday: "21 Enero 2000",
        genero: "M",
      },
      infoGeneral: {
        proyectos: {
          roboboat: true,
          robosub: false,
          sdv: true,
          drone: false,
        },
        puesto: "Web Developer",
        entryYear: "2022",
        area: "Media",
      },
      contacto: {
        profilePicture: { David },
        emailInstitucional: "a01235692@tec.mx",
        emailPersonal: "gerardomartinez.hi@gmail.com",
        whatsapp: "8712759212",
        linkedin: "",
        github: "https://github.com/davidmartinezhi",
        instagram: "https://www.instagram.com/davidmartinez.hi/",
        facebook: "https://www.facebook.com/profile.php?id=100008118908014",
        twitter: "https://twitter.com/davidmtzhi",
      },
    },
    {
      matricula: "A01235692",
      nombre: "Rodrigo",
      apellido: "Alatorre Cuellar",
      datosPersonales: {
        carrera: "ITC",
        semestre: "4to",
        birthplace: "Torreón, Coahuila",
        birthday: "21 Enero 2000",
        genero: "M",
      },
      infoGeneral: {
        proyectos: {
          roboboat: true,
          robosub: false,
          sdv: true,
          drone: false,
        },
        puesto: "Web Developer",
        entryYear: "2022",
        area: "Media",
      },
      contacto: {
        profilePicture: { David },
        emailInstitucional: "a01235692@tec.mx",
        emailPersonal: "gerardomartinez.hi@gmail.com",
        whatsapp: "8712759212",
        linkedin: "",
        github: "https://github.com/davidmartinezhi",
        instagram: "https://www.instagram.com/davidmartinez.hi/",
        facebook: "https://www.facebook.com/profile.php?id=100008118908014",
        twitter: "https://twitter.com/davidmtzhi",
      },
    },
    {
      matricula: "A01235692",
      nombre: "Eduardo",
      apellido: "Ramosclamont",
      datosPersonales: {
        carrera: "ITC",
        semestre: "4to",
        birthplace: "Torreón, Coahuila",
        birthday: "21 Enero 2000",
        genero: "M",
      },
      infoGeneral: {
        proyectos: {
          roboboat: true,
          robosub: false,
          sdv: true,
          drone: false,
        },
        puesto: "Web Developer",
        entryYear: "2022",
        area: "Media",
      },
      contacto: {
        profilePicture: { David },
        emailInstitucional: "a01235692@tec.mx",
        emailPersonal: "gerardomartinez.hi@gmail.com",
        whatsapp: "8712759212",
        linkedin: "",
        github: "https://github.com/davidmartinezhi",
        instagram: "https://www.instagram.com/davidmartinez.hi/",
        facebook: "https://www.facebook.com/profile.php?id=100008118908014",
        twitter: "https://twitter.com/davidmtzhi",
      },
    },
    {
      matricula: "A01235692",
      nombre: "Gerardo",
      apellido: "Martínez Hidrogo",
      datosPersonales: {
        carrera: "ITC",
        semestre: "4to",
        birthplace: "Torreón, Coahuila",
        birthday: "21 Enero 2000",
        genero: "M",
      },
      infoGeneral: {
        proyectos: {
          roboboat: true,
          robosub: false,
          sdv: true,
          drone: false,
        },
        puesto: "Web Developer",
        entryYear: "2022",
        area: "Media",
      },
      contacto: {
        profilePicture: { David },
        emailInstitucional: "a01235692@tec.mx",
        emailPersonal: "gerardomartinez.hi@gmail.com",
        whatsapp: "8712759212",
        linkedin: "",
        github: "https://github.com/davidmartinezhi",
        instagram: "https://www.instagram.com/davidmartinez.hi/",
        facebook: "https://www.facebook.com/profile.php?id=100008118908014",
        twitter: "https://twitter.com/davidmtzhi",
      },
    },
    {
      matricula: "A01235692",
      nombre: "David",
      apellido: "Martínez Hidrogo",
      datosPersonales: {
        carrera: "ITC",
        semestre: "4to",
        birthplace: "Torreón, Coahuila",
        birthday: "21 Enero 2000",
        genero: "M",
      },
      infoGeneral: {
        proyectos: {
          roboboat: false,
          robosub: false,
          sdv: true,
          drone: false,
        },
        puesto: "Web Developer",
        entryYear: "2022",
        area: "Media",
      },
      contacto: {
        profilePicture: { David },
        emailInstitucional: "a01235692@tec.mx",
        emailPersonal: "gerardomartinez.hi@gmail.com",
        whatsapp: "8712759212",
        linkedin: "",
        github: "https://github.com/davidmartinezhi",
        instagram: "https://www.instagram.com/davidmartinez.hi/",
        facebook: "https://www.facebook.com/profile.php?id=100008118908014",
        twitter: "https://twitter.com/davidmtzhi",
      },
    },
    {
      matricula: "A01235692",
      nombre: "David",
      apellido: "Martínez Hidrogo",
      datosPersonales: {
        carrera: "ITC",
        semestre: "4to",
        birthplace: "Torreón, Coahuila",
        birthday: "21 Enero 2000",
        genero: "M",
      },
      infoGeneral: {
        proyectos: {
          roboboat: false,
          robosub: false,
          sdv: true,
          drone: false,
        },
        puesto: "Web Developer",
        entryYear: "2022",
        area: "Media",
      },
      contacto: {
        profilePicture: { David },
        emailInstitucional: "a01235692@tec.mx",
        emailPersonal: "gerardomartinez.hi@gmail.com",
        whatsapp: "8712759212",
        linkedin: "",
        github: "https://github.com/davidmartinezhi",
        instagram: "https://www.instagram.com/davidmartinez.hi/",
        facebook: "https://www.facebook.com/profile.php?id=100008118908014",
        twitter: "https://twitter.com/davidmtzhi",
      },
    },
    {
      matricula: "A01235692",
      nombre: "David",
      apellido: "Martínez Hidrogo",
      datosPersonales: {
        carrera: "ITC",
        semestre: "4to",
        birthplace: "Torreón, Coahuila",
        birthday: "21 Enero 2000",
        genero: "M",
      },
      infoGeneral: {
        proyectos: {
          roboboat: false,
          robosub: false,
          sdv: true,
          drone: false,
        },
        puesto: "Web Developer",
        entryYear: "2022",
        area: "Media",
      },
      contacto: {
        profilePicture: { David },
        emailInstitucional: "a01235692@tec.mx",
        emailPersonal: "gerardomartinez.hi@gmail.com",
        whatsapp: "8712759212",
        linkedin: "",
        github: "https://github.com/davidmartinezhi",
        instagram: "https://www.instagram.com/davidmartinez.hi/",
        facebook: "https://www.facebook.com/profile.php?id=100008118908014",
        twitter: "https://twitter.com/davidmtzhi",
      },
    },
    {
      matricula: "A01235692",
      nombre: "David",
      apellido: "Martínez Hidrogo",
      datosPersonales: {
        carrera: "ITC",
        semestre: "4to",
        birthplace: "Torreón, Coahuila",
        birthday: "21 Enero 2000",
        genero: "M",
      },
      infoGeneral: {
        proyectos: {
          roboboat: false,
          robosub: false,
          sdv: true,
          drone: false,
        },
        puesto: "Web Developer",
        entryYear: "2022",
        area: "Media",
      },
      contacto: {
        profilePicture: { David },
        emailInstitucional: "a01235692@tec.mx",
        emailPersonal: "gerardomartinez.hi@gmail.com",
        whatsapp: "8712759212",
        linkedin: "",
        github: "https://github.com/davidmartinezhi",
        instagram: "https://www.instagram.com/davidmartinez.hi/",
        facebook: "https://www.facebook.com/profile.php?id=100008118908014",
        twitter: "https://twitter.com/davidmtzhi",
      },
    }
  ];

  return (
    <>
      <Container fluid>
        <Row className="main-banner">
          <Banner video={teamVideo}>
            <h1>Meet The Team</h1>
            <p>
              Passionate People Excited About Working On Technology That Shapes
              Our Society
            </p>
          </Banner>
        </Row>

        <div className="content">

        {/* Quote */}
          <Container fluid className="hover-effect">
        <Row className="quote">
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              The strength of the team is each individual member. The strength
              of each member is the team.{" "}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">Phil Jackson</cite>
            </footer>
          </blockquote>
        </Row>
        </Container>

        {/* Mesa Directiva */}
        <Row className="area-banner">
          <AreaBanner video={muralVideo}>
            <h1>Board Of Directors</h1>
          </AreaBanner>
        </Row>
        <Parallax strength={-200} bgImage={demo}>
          <Container fluid>
            <Row className="members-list mt-5">
              <MembersList
                video={muralVideo}
                members={testMembers}
                area={"Media"}
              />
            </Row>
          </Container>
        </Parallax>

        {/* Perception */}
        <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={perceptionVideo}>
            <h1>Perception</h1>
            <p>
                Enabling Our Vehicules To Perceive The World Around Them with
                Sensors Such as Lidar, Hydrophones and Stereo Cameras
            </p>
          </AreaBanner>
        </Row>
        <Parallax strength={-200} bgImage={demo}>
          <Container fluid>
            <Row className="members-list mt-5">
              <MembersList
                video={perceptionVideo}
                members={testMembers}
                area={"Media"}
              />
            </Row>
          </Container>
        </Parallax>

        {/* Software */}
        <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={softwareVideo}>
            <h1>Software</h1>
            <p>
                Development of Algorithms. Based on Systems from Perception,
                Control and Location. To enable our vehicules to Conquer the
                Challenges in each Competitions
              </p>
          </AreaBanner>
        </Row>
        <Parallax strength={200} bgImage={demo}>
          <Container fluid>
            <Row className="members-list mt-5">
              <MembersList
                video={softwareVideo}
                members={testMembers}
                area={"Media"}
              />
            </Row>
          </Container>
        </Parallax>

       {/* Control */}
       <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={controlVideo}>
            <h1>Control</h1>
            <p>
                Generating Signals for Vehicles Engines Based on References Such
                as Position Speed and Orientation
            </p>
          </AreaBanner>
        </Row>
        <Parallax strength={-200} bgImage={demo}>
          <Container fluid>
            <Row className="members-list mt-5">
              <MembersList
                video={controlVideo}
                members={testMembers}
                area={"Media"}
              />
            </Row>
          </Container>
        </Parallax>

       {/* Location */}
       <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={locationVideo}>
            <h1>Location</h1>
            <p>
                Estimating Status Such as Position, Speed and Orientation of a
                Vehicle with Different Sensors such as IMU, DVL, GPS and
                barometers
              </p>
          </AreaBanner>
        </Row>
        <Parallax strength={-200} bgImage={demo}>
          <Container fluid>
            <Row className="members-list mt-5">
              <MembersList
                video={locationVideo}
                members={testMembers}
                area={"Media"}
              />
            </Row>
          </Container>
        </Parallax>

        {/* Mechanics */}
        <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={mechanicsVideo}>
            <h1>Mechanics</h1>
            <p>Vehicle Design and Manufacturing</p>
          </AreaBanner>
        </Row>
        <Parallax strength={-200} bgImage={demo}>
          <Container fluid>
            <Row className="members-list mt-5">
              <MembersList
                video={mechanicsVideo}
                members={testMembers}
                area={"Media"}
              />
            </Row>
          </Container>
        </Parallax>

        {/* Electronics */}
        <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={electronicsVideo}>
            <h1>Electronics</h1>
            <p>
                Design of Power Systems and Integration of Modules such as
                Sensors, Computers and Actuators
              </p>
          </AreaBanner>
        </Row>
        <Parallax strength={200} bgImage={demo}>
          <Container fluid>
            <Row className="members-list mt-5">
              <MembersList
                video={electronicsVideo}
                members={testMembers}
                area={"Media"}
              />
            </Row>
          </Container>
        </Parallax>

      {/* Business */}
      <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={businessVideo}>
            <h1>Business</h1>
            <p>
                Getting Sponsorships and Finding Ways to Support Team Projects{" "}
              </p>
          </AreaBanner>
        </Row>
        <Parallax strength={-200} bgImage={demo}>
          <Container fluid>
            <Row className="members-list mt-5">
              <MembersList
                video={businessVideo}
                members={testMembers}
                area={"Media"}
              />
            </Row>
          </Container>
        </Parallax>

      {/* Media */}
        <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={mediaVideo}>
            <h1>Media</h1>
            <p>
                Representing the Team and what it stands for, on social media
                and its website.
              </p>
          </AreaBanner>
        </Row>
        <Parallax strength={-200} bgImage={demo}>
          <Container fluid>
            <Row className="members-list mt-5">
              <MembersList
                video={mediaVideo}
                members={testMembers}
                area={"Media"}
              />
            </Row>
          </Container>
        </Parallax>
        <div className="division" />
        <Footer />
        </div>
      </Container>
    </>
  );
}
