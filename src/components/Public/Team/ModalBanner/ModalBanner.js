import React from 'react'

import './ModalBanner.scss';

export default function ModalBanner(props) {
    const { children, video } = props;

    return (
      <>
        <div className="overlay-modal">
        <video className="video-modal" src={video} autoPlay loop muted />
        </div>
        <div className="content-modal">{children}</div>
      </>
    );
}
