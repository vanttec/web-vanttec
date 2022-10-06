//~ DEPENDENCIES
import React, { useState, useEffect, useContext, useRef } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import theme from '../../utils/theme'

//~ COMPONENTS
import { Box, Flex, Text } from '@chakra-ui/react'

//~ MEDIA
import { FaReact } from 'react-icons/fa'

//~ MISCELLANEOUS
import { AppContext } from '../../context/context'
import useWindowSize from '../../utils/window-size'

const Foot = styled.footer`
  position: relative;
  width: 100%;
  z-index: 999;
  background: black;
`

const Footer = (props) => {
  //? VARIABLES - STATES - PROPS - REFS

  //? CONTEXT
    const appContext = useContext(AppContext);

  //? SANITY DATA
    // const data = useStaticQuery(graphql`
    //   query {
    //     allSite {
    //       nodes {
    //         id
    //       }
    //     }
    //   }
    // `);

  //? FUNCTIONS

  //? EFFECTS

  return (
    <div>
      {/* //todo */}
    </div>
  )
}

export default Footer