//~ DEPENDENCIES
import React, { useState, useEffect, useContext, useRef } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

//~ COMPONENTS
import { Box, Flex, Text } from '@chakra-ui/react'

//~ MEDIA
import { RiMenu2Line } from 'react-icons/ri'

//~ MISCELLANEOUS
import { AppContext } from '../../context/context'
import useWindowSize from '../../utils/window-size'

const Template = (props) => {
  //? VARIABLES - STATES - PROPS - REFS
    const [ values, setValues ] = useState({})

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
    const handleChange = (e) => {
      const { name, value } = e.target
      setValues({...values, [name]: value})
    }
    
  //? EFFECTS

  return (
    <div>
      {/* //todo */}
    </div>
  )
}

export default Template