import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img from "../assets/Natural-Color-Maps_1.webp"
import CategoryCard from './categoryCard';
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
 

const Swip = () => {
   return (<>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >   
       <SwiperSlide><CategoryCard  bgImage={img}/></SwiperSlide>
      <SwiperSlide><CategoryCard  bgImage={img}/></SwiperSlide>
      <SwiperSlide><CategoryCard  bgImage={img}/></SwiperSlide>
      <SwiperSlide><CategoryCard  bgImage={img}/></SwiperSlide>
     </Swiper>
      </>
  )
}

export default Swip
