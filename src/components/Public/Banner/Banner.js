import React from "react";
import { Row } from "react-bootstrap";

import "./Banner.scss";

export default function Banner(props) {
  const { children, video } = props;

  return (
    <Row>
      <div className="overlay-banner"></div>
      <video className="video-banner" src={video} autoPlay loop muted />
      <div className="content-banner">{children}</div>
    </Row>
  );
}
