//~ DEPENDENCIES
import React from 'react'

//~ COMPONENTS
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

//~ MEDIA

//~ MISCELLANEOUS
import MyContext, { AppContext } from '../context/context';
import myTheme from '../utils/theme';

import '../styles/styles.scss'
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/zoom";

const Index = ({}) => {
  //? VARIABLES - STATES - PROPS - REFS
    const theme = extendTheme(myTheme)

  //? CONTEXT
    const appContext = React.useContext(AppContext);

  //? SANITY DATA

  //? FUNCTIONS

  //? EFFECTS

  return (
    <ChakraProvider theme={theme}>
      <MyContext>
        <Header />
        <main>{children}</main>
        <Footer />
      </MyContext>
    </ChakraProvider>
  )
}

export default Index