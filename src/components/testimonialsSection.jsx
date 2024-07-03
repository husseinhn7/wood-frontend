import React from 'react'
import TestimonyCard from './testimonyCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import SlideBtn from './SlideBtn'
import useWindowWidth from '../hooks/useWindowWidth'
const TestimonialsSection = () => {
    const width  = useWindowWidth()
  return (
    <div className=' flex px-20 '>
    <p> {Math.floor(width / 240)}  </p>
    
        <Swiper 
        spaceBetween={1}
        slidesPerView={Math.floor(width / 240) - 1}
        className='  self-center'

        >
        <SlideBtn type="next" />
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
            <SwiperSlide > <TestimonyCard/>  </SwiperSlide>
        <SlideBtn type="prev" />

      </Swiper>
    </div>
  )
}

export default TestimonialsSection
