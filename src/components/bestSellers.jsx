import React from 'react'
import Card from './card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const BestSellers = () => {
  return (
    <div className=' flex items-center justify-center flex-col my-20'>
        <h1 className=' text-3xl my-7'>Our Bestsellers</h1>
        <div className='flex  my-20 w-full   '>
        <Swiper
            className=' px-10 flex items-center justify-center'
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
        
        >
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          
        </Swiper>
    </div>
      
    </div>
  )
}

export default BestSellers
