//~ DEPENDENCIES
import React, { useState } from 'react'
import styled from 'styled-components'

//~ COMPONENTS
import { Box, Text, Popover, PopoverTrigger, PopoverContent, PopoverBody} from '@chakra-ui/react';

//~ MEDIA
import { BiChevronDown } from 'react-icons/bi'

//~ MISCELLANEOUS

const Arrow = styled(BiChevronDown)`
  font-size: 24px;
  margin: 2px 0 2px 2px;
  transition: all 0.3s ease-in-out;

  &.expanded {
    transform: rotate(180deg);
  }
`

const SubMenu = (props) => {
  //? VARIABLES - STATES - PROPS - REFS
  const { title, children } = props
  const [open, setOpen] = useState(false)

  //? CONTEXT

  //? SANITY DATA

  //? FUNCTIONS

  //? EFFECTS

  return (
    <Popover onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
      <PopoverTrigger >
        <Box tabIndex='0' role='button' aria-label={title} children={<Text as='span' display='flex'>{title} <Arrow className={open && 'expanded'} /></Text>} />
      </PopoverTrigger>
      <PopoverContent border='none' borderRadius='sm' p={1} cursor='default' boxShadow={'0 0 8px 0.5px rgba(0,0,0,0.3)'}>
        <PopoverBody textAlign={'center'} display='flex' alignItems={'start'} flexDirection='column'>
          {children}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SubMenu