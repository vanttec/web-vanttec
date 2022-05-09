import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import "./Aside.scss";
// import fonts awesome cdn
const Networks = () => {
  return (
    <aside>
    {/* <div class="init">
        <a href="/" class="p-init">V|T</a>
    </div> */}

    <div class="sc-icon">
        <ul>
            <li><a href="https://www.facebook.com/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
            <li><a href="https://www.instagram.com/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.twitter.com/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
            <li><a href="https://www.linkedin.com/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="mailto:" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faMailBulk} /></a></li>
        </ul>
    </div>
</aside>
  );
};

export default Networks;
