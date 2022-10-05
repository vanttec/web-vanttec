//~ DEPENDENCIES
import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

//~ COMPONENTS
import { Box, Flex } from '@chakra-ui/react'

//~ MEDIA

//~ MISCELLANEOUS

const Wrapper = styled(Box)`
  width: 1024px;
  height: 512px;  
  @media (max-width: 768px) {
    width: 512px;
    height: 256px;  
  }
`

const Template = ({ video, autoplay = false }) => {
  //? VARIABLES - STATES - PROPS - REFS

  //? CONTEXT

  //? SANITY DATA

  //? FUNCTIONS

  //? EFFECTS

  return (
    <Flex py={[2,2,3,3,4,5]} justify='center' align='center' >
      <Wrapper>
        <ReactPlayer
          width="100%"
          height="100%"
          url={video}
          autoplay={autoplay}
          title="Player"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Wrapper>
    </Flex>
  )
}

export default Template
