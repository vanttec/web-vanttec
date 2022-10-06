//~ DEPENDENCIES
import React, { useRef } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import theme from '../../utils/theme'

//~ COMPONENTS
import { Box, Flex, Icon, Divider, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import SubMenu from './subMenu'

//~ MEDIA
import { BiMenu } from 'react-icons/bi'

//~ MISCELLANEOUS

const Head = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  z-index: 999;
  background: black;
`

const Item = styled(Link)`
  display: block;
  color: ${(p) => p.secondary ? theme.colors.dark : theme.colors.white};
  font-family: ${theme.fonts.medium};
  padding: 0 ${theme.space[3]};
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: ${theme.colors.primary};
  }
`

const Header = (props) => {
  //? VARIABLES - STATES - PROPS - REFS
  const { isOpen, onOpen, onClose } = useDisclosure()
  const menuRef = useRef()

  const menuItems = [
    {name: 'Home', link: '/', icon: null, subItems: []},
    {name: 'About', link: '/about', icon: null, subItems: [
      {name: 'Awards', link: ''},
      {name: 'Our team', link: ''},
      {name: 'About us', link: ''},
    ]},
    {name: 'Projects', link: '/projects', icon: null, subItems: [
      {name: 'Competitions', link: ''},
      {name: 'Boat', link: ''},
      {name: 'Submarine', link: ''},
      {name: 'Autonomous Car', link: ''},
      {name: 'Drone', link: ''},
    ]},
    {name: 'Sponsors', link: '/contact', icon: null, subItems: []},
    {name: 'Contact', link: '/contact', icon: null, subItems: []},
  ]

  //? CONTEXT

  //? SANITY DATA
    const dataImage = useStaticQuery(graphql`
      query {
        LogoVanttecW: file(relativePath: { eq: "logos/vanttec_white.png" }) {
          childImageSharp {
            gatsbyImageData(width: 80, placeholder: BLURRED, formats: [WEBP])
          }
        }
        LogoVanttecC: file(relativePath: { eq: "logos/vanttec_color.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [WEBP])
          }
        }
      }
    `)
    const LogoVanttecW = dataImage.LogoVanttecW.childImageSharp.gatsbyImageData
    const LogoVanttecC = dataImage.LogoVanttecC.childImageSharp.gatsbyImageData

  //? FUNCTIONS

  //? EFFECTS

  return (
    <Head>
      <Flex p={3} h='100%' justify='space-between' alignItems='center'>
        <Box>
          <GatsbyImage image={LogoVanttecW} />
        </Box>
        
        {/* DESKTOP MENU */}
        <Box display={['none','none','none','block','block']}>
          <Flex alignItems='center'>
            {menuItems.map((item, idx) => (
              item.subItems.length > 0 ?
                <Item key={idx}>
                  <SubMenu title={item.name}>
                    {item.subItems.map((sub, idy) => (
                      <Box py={2}>
                        <Item key={idy} to={sub.link} secondary>{sub.name}</Item>
                      </Box>
                    ))}
                  </SubMenu>
                </Item>
                :
                <Item key={idx} to={item.link}>{item.name}</Item>
            ))}
          </Flex>
        </Box>

        {/* MOBIL MENU */}
        <Box display={['block','block','block','none','none']}>
          <Flex alignItems='center'>
            <Icon as={BiMenu} color='white' w='36px' h='36px' ref={menuRef} onClick={onOpen} style={{cursor: 'pointer'}}/>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={menuRef} >
              <DrawerOverlay />
              <DrawerContent p={3} overflow='scroll'>
                <DrawerCloseButton style={{right: '10px'}} /><br/>
                <Box>
                  <Flex align='center' justify='center'>
                    <GatsbyImage image={LogoVanttecC} style={{width: '140px'}} />
                  </Flex>

                  <Divider my={3} mx='30%' w='40%' border='3px solid' borderColor='primary' opacity='1' />

                  <Box>
                    <Accordion allowToggle >
                      {menuItems.map((item, idx) => (
                        item.subItems.length > 0 ?
                          <Item key={idx} secondary>
                              <AccordionItem border='none'>
                                <AccordionButton px={0} background='none' fontSize='inherit'>
                                  <Box flex='1' textAlign='left'>
                                    {item.name}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel px={0} pb={1} pt={0}>
                                  {item.subItems.map((sub, idy) => (
                                    <Box py={2} opacity='0.6'>
                                      <Item key={idy} to={sub.link} secondary>{sub.name}</Item>
                                    </Box>
                                  ))}
                                </AccordionPanel>
                              </AccordionItem>
                          </Item>
                          :
                          <Box py={2}>
                            <Item key={idx} to={item.link} secondary>{item.name}</Item>
                          </Box>
                      ))}
                    </Accordion>
                  </Box>
                </Box>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Box>

      </Flex>
    </Head>
  )
}

export default Header