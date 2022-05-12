import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Parallax } from "react-parallax";

//Photos
import demo from '../../../../assets/img/jpg/backgroundwhite.png'

import './Sponsors.scss'

export default function Sponsors() {
  return (
    <Parallax strength={-100} bgImage={demo}>
        <Container fluid>
            <Row className='home-header'>
                <h1>Supported By</h1>
            </Row>
            <Row>

            </Row>
        </Container>
    </Parallax>
  )
}
