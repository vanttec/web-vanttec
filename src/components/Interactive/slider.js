//~ DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

//~ COMPONENTS
import { Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'

//~ MEDIA

//~ MISCELLANEOUS
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Slider = (props) => {
  //? VARIABLES - STATES - PROPS - REFS
  const { children, slidesPerView = 3 } = props

  //? CONTEXT

  //? SANITY DATA

  //? FUNCTIONS

  //? EFFECTS

  return (
    <Box py={[3]} px={[3,3,3,3,4]}>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {slidesPerView: 1, spaceBetween: 20},
          768: {slidesPerView: 2, spaceBetween: 30},
          1280: {slidesPerView: slidesPerView, spaceBetween: 50}
        }}
      >
        {children.map((item, idx) => (
          <SwiperSlide key={idx} style={{height: 'auto'}}><Box {...props} height='100%' pb={['45px']}>{item}</Box></SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Slider