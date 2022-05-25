import React from 'react'
import ReactPlayer from 'react-player';
import './ModalBanner.scss';

export default function ModalBanner(props) {
  const { children, video } = props;

  return (
    <>
      <div className="player-wrapper overlay-modal">
        {/* <video className="video-banner" src={video} autoPlay loop muted /> */}
        <ReactPlayer
          className={"video-modal"}
          url={video}
          width="2500px"
          height="2000px"
          muted={true}
          loop={true}
          playing={true}
        />
      </div>
      <div className="content-modal">{children}</div>
    </>
  );
}
