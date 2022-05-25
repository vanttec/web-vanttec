import React from "react";
import ReactPlayer from "react-player";
import "./Banner.scss";

export default function Banner(props) {
  const { children, video } = props;

  return (
    <>
      <div className="player-wrapper">
      {/* <video className="video-banner" src={video} autoPlay loop muted /> */}
      <ReactPlayer 
      className={"video-banner"}
        url={video}
        width='2000px'
        height='1800px'
        muted={true}
        loop={true}
        playing={true}

      />
      </div>
      <div className="content-banner">{children}</div>
    </>
  );
}
