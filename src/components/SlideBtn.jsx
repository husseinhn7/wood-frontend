import React from 'react'
import { useSwiper } from 'swiper/react'




const SlideBtn = ({type}) => {
    const swiper = useSwiper()

  return ( 
    <button onClick={type == "next" ? () => swiper.slideNext() :() => swiper.slidePrev() }>{type}==</button>
  )
}

export default SlideBtn
