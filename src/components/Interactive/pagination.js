//~ DEPENDENCIES
import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'

//~ COMPONENTS
import { Box, Flex, Text, Icon } from '@chakra-ui/react'

//~ MEDIA
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";

//~ MISCELLANEOUS

const Template = (props) => {
  //? VARIABLES - STATES - PROPS - REFS
    const { range = 2, children} = props
    const [ display, setDisplay ] = useState(children)
    const [ page, setPage ] = useState(0)
    const pages = Math.ceil(children.length / range) - 1

  //? CONTEXT

  //? SANITY DATA

  //? FUNCTIONS

  //? EFFECTS
    useEffect(() => {
      setDisplay(children.slice(range * page, (range * page) + range))
    }, [page, children])

  return (
    <div id='pagination-head'>
      <Box w='100%'>
        {display}
      </Box>

      <Flex justify='space-between' align='center' mt={5}>
        <Box w={['33%']} textAlign='left'>
          <Text as='span' display={['none','none','inline','inline','inline']}>Displaying {(range * page) + 1} - {(range * page) + display.length} events of {children.length}</Text>
          <Text as='span' display={['inline','inline','none','none','none']} fontSize={'sm'}>{(range * page) + 1} - {(range * page) + display.length} of {children.length}</Text>
        </Box>
        <Box w={['33%']}>
          <Flex justify='center' align='center'>
            <Icon as={HiChevronDoubleLeft} w='18px' h='18px' color={page > 0 ? 'primary' : 'primary100'} mx={[0,1,2,2,3]} cursor={page > 0 && 'pointer'} onClick={() => {setPage(0); navigate('/events#pagination-head')}} />
            <Icon as={HiChevronLeft} w='26px' h='26px' color={page > 0 ? 'primary' : 'primary100'} mx={[0,1,2,2,3]} cursor={page > 0 && 'pointer'} onClick={() => {page > 0 && setPage(page - 1); navigate('/events#pagination-head')}}/>
            <Icon as={HiChevronRight} w='26px' h='26px' color={page < pages ? 'primary' : 'primary100'} mx={[0,1,2,2,3]} cursor={page < pages && 'pointer'} onClick={() => {page < pages && setPage(page + 1); navigate('/events#pagination-head')}} />
            <Icon as={HiChevronDoubleRight} w='18px' h='18px' color={page < pages ? 'primary' : 'primary100'} mx={[0,1,2,2,3]} cursor={page < pages && 'pointer'} onClick={() => {setPage(pages); navigate('/events#pagination-head')}} />
          </Flex>
        </Box>
        <Box w={['33%']} textAlign='right'>
          <Text as='span' display={['none','none','inline','inline','inline']}>Page {page + 1} of {pages + 1}</Text>
          <Text as='span' display={['inline','inline','none','none','none']} fontSize={'sm'}>{page + 1} of {pages + 1}</Text>
        </Box>
      </Flex>
    </div>
  )
}

export default Template