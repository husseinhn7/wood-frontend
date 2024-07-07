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
    <p> {Math.floor(width / 240)}  </p>
    <div className=' flex px-20 my-20' data-aos="fade-right">
   
    <div ref={prevRef} className='cursor-pointer flex items-center justify-center rounded-full bg-slate-100 w-14 h-14 shadow-lg relative top-0 left-0'>
         
    </div>
      
    
        <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            slidesPerView={Math.floor(width / 240) - 1}
            className='  self-center relative'
            navigation = {
              {prevEl: prevRef.current,
          nextEl: nextRef.current,}
            }
            

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
