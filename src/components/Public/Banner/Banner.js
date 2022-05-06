import React from "react";
import { Row } from "react-bootstrap";

import "./Banner.scss";

export default function Banner(props) {
  const { children, video } = props;

  return (
    <Row>
      <div className="overlay"></div>
      <video className="video" src={video} autoPlay loop muted />
      <div className="content">{children}</div>
    </Row>
  );
}
