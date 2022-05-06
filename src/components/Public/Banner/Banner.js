import React from "react";

import "./Banner.scss";

export default function Banner(props) {
  const { children, video } = props;

  return (
    <>
      <div className="overlay-banner">
      <video className="video-banner" src={video} autoPlay loop muted />
      </div>
      <div className="content-banner">{children}</div>
    </>
  );
}
