import React from 'react'
import { Row } from 'react-bootstrap'

import './AreaBanner.scss';

export default function AreaBanner(props) {
    const { children, video } = props;

    return (
      <Row>
        <div className="overlay-area">
        <video className="video-area" src={video} autoPlay loop muted />
        </div>
        <div className="content-area">{children}</div>
      </Row>
    );
}
