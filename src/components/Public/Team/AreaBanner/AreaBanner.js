import React from 'react'
import { Row } from 'react-bootstrap'

import './AreaBanner';

export default function AreaBanner(props) {
    const { children, video } = props;

    return (
      <Row>
        <div className="overlay">
        <video className="video" src={video} autoPlay loop muted />
        </div>
        <div className="content">{children}</div>
        
        
      </Row>
    );
}
