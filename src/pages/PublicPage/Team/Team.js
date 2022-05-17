import React from "react";
import Banner from "../../../components/Public/Banner/Banner";
import AreaBanner from "../../../components/Public/Team/AreaBanner/AreaBanner";
import MembersList from "../../../components/Public/Team/MembersList/MembersList";
import Footer from "../../../components/Public/Footer/Footer";
import { Parallax } from "react-parallax";

//Videos
import videoTest from "../../../assets/videos/mp4/VanttecPoolVideo.mp4";
import muralVideo from "../../../assets/videos/mp4/VanttecDroneMural.mp4";
import campusVideo from "../../../assets/videos/mp4/VanttecCampusVideo.mp4";
import mediaVideo from "../../../assets/videos/mp4/mediaVideo.mp4";
import perceptionVideo from "../../../assets/videos/mp4/perceptionVideo.mp4";
import electronicsVideo from "../../../assets/videos/mp4/electronicsVideo.mp4";
import mechanicsVideo from "../../../assets/videos/mp4/mechanicsVideo.mp4";
import softwareVideo from "../../../assets/videos/mp4/softwareVideo.mp4";

//Imagenes
import David from "../../../assets/img/jpeg/Yo.jpg";
import demo from "../../../assets/img/jpg/backgroundwhite.png";

import { Container, Row, Button } from "react-bootstrap";

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
    },
  ];

  return (
    <>
      <Container fluid>
        <Row className="main-banner">
          <Banner video={campusVideo}>
            <h1>Meet The Team</h1>
            <p>
              Passionate People Excited About Working On Technology That Shapes
              Our Society
            </p>
            <Button className="button-banner" href="#quote">
              See More
            </Button>
          </Banner>
        </Row>

        <div className="content">

        {/* Quote */}
        <div className="division" />
        <Parallax strength={-200} bgImage={demo}>
          <Container fluid>
        <Row className="quote" id="quote">
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
        </Parallax>

        {/* Mesa Directiva */}
        <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={muralVideo}>
            <h1>Board Of Directors</h1>
          </AreaBanner>
        </Row>
        <Parallax strength={200} bgImage={demo}>
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

        {/* Perception */}
        <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={perceptionVideo}>
            <h1>Perception</h1>
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

        {/* Mechanics */}
        <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={mechanicsVideo}>
            <h1>Mechanics</h1>
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

      {/* Media */}
        <div className="division" />
        <Row className="area-banner">
          <AreaBanner video={mediaVideo}>
            <h1>Media</h1>
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
        <Footer />
        </div>
      </Container>
    </>
  );
}
