import React from 'react'
import TestimonyCard from './testimonyCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import SlideBtn from './SlideBtn'
import useWindowWidth from '../hooks/useWindowWidth'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';



const TestimonialsSection = () => {
  useEffect(()=>{
    Aos.init()

  },[])
    const width  = useWindowWidth()
  return (
    <div className=' flex px-20 my-20' data-aos="fade-right">
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
