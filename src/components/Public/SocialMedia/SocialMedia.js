import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTiktok,
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import './SocialMedia.scss';

export default function SocialMedia() {

  return (
    <Row>
      <div className="social-media">
        <a href="https://www.linkedin.com/company/vanttec/mycompany/" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        {/* <a href="" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faTiktok} />
        </a> */}

        <a href="https://instagram.com/vanttec/" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/VantTec" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://mobile.twitter.com/vanttecmx" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </Row>
  );
}
