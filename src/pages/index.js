//~ DEPENDENCIES
import React, { useState, useEffect, useContext, useRef } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

//~ COMPONENTS
import { Box, Flex, Text } from '@chakra-ui/react'
import Layout from '../components/layout'
import Seo from '../components/Seo/index'

//~ MEDIA
import { FaReact } from 'react-icons/fa'

//~ MISCELLANEOUS
import { AppContext } from '../context/context'
import useWindowSize from '../utils/window-size'

const Template = (props) => {
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
    <Layout>
      <Seo/>
      
      <div style={{height: '100vh'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}><h1 style={{fontSize: '60px'}}>HI VANTTEC</h1></div>
      </div>
    </Layout>
  )
}

export default Template