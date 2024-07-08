import React from 'react'
import TestimonyCard from './testimonyCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import SlideBtn from './SlideBtn'
import useWindowWidth from '../hooks/useWindowWidth'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import NextBtn from './nextBtn'
import PrevBtn from './prevBtn'
import { IoIosArrowBack } from "react-icons/io";


 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react'


const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(()=>{
    Aos.init()

  },[])
    const width  = useWindowWidth()
  return ( 
    <>
     <div className=' flex   my-20' data-aos="fade-right">
   
   
      
    
        <Swiper 
            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
             
             navigation = {
              {prevEl: prevRef.current,
          nextEl: nextRef.current,}
            }

            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            

        >
        
          
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
        

      </Swiper>
     
    </div>
    </>
  )
}

export default TestimonialsSection
