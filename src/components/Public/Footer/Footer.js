import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faGlobe } from "@fortawesome/free-solid-svg-icons";
import './Footer.scss'
// import fonts awesome cdn
const Footer = () => {
  return (
    // ------------------ 1 ------------------
    <footer className="footer">
      <div className="container">
      <p className="touch">Get in touch</p>
      <p className="motivation">Frase Inspiracional</p>
        <div className="row mobile">
          <div className="social-networks">
            <a href="https://www.facebook.com/" target={"_blank"} rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com/" target={"_blank"} rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.twitter.com/" target={"_blank"} rel="noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="https://www.linkedin.com/" target={"_blank"} rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:" target={"_blank"} rel="noreferrer">
              <FontAwesomeIcon icon={faMailBulk} />
            </a>
          </div>

          <div className="chooseLang ">
            <div className="icon">
            
            </div>
            <div className="languages">
              <p><i><FontAwesomeIcon icon={faGlobe} /> </i>
                <a href="#"> EN</a> / <a href="#">ES</a>
              </p>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; 2022 Copyright: <span>VantTec</span>
          </p>
        </div>
      </div>
    </footer>

    // ------------------ 2 ------------------

    // <footer className="footer">
    //   <div className="container">
    //     <div className="left">
    //       <p className="title-side">Get in touch</p>
    //       <a href="mailto:">VantTec@mail.com</a>
    //       <p className="phone">123 - 456 - 7890</p>
    //     </div>
    //     <div className="right">
    //       <p className="title-side">Follow us</p>
    //       <div className="social-networks">
    //         <a href="https://www.facebook.com/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
    //         <a href="https://www.instagram.com/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
    //         <a href="https://www.twitter.com/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /></a>
    //         <a href="https://www.linkedin.com/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
    //         </div>
    //         </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
