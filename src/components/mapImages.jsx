import React , {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import log from "../assets/login.webp"



const MapImages = () => {
    
    const swiperRef = useRef(null);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };
  return (
    <div className='w-full lg:w-6/12    flex gap-2 lg:items-center lg:flex-row flex-col ' >
    <div className='    flex lg:flex-col gap-3  lg:max-h-[60vh] lg:min-h-80 order-2 lg:order-1  lg:w-auto w-full  lg:min-w-fit    overflow-scroll'>
    
    
    <button className=' rounded-md' onClick={() => goToSlide(0)}><img  src={log}  className=' min-w-20 w-20    rounded-md' /> </button>
    <button className=' rounded-md' onClick={() => goToSlide(1)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(2)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(3)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(0)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(1)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(2)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(3)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(0)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(1)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(2)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(3)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(0)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(1)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(2)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
    <button className=' rounded-md' onClick={() => goToSlide(3)}><img  src={log}  className=' min-w-20 w-20  rounded-md' />  </button>
     
    </div>
    <Swiper 
    ref={swiperRef}
    modules={[Navigation]}
    className=' rounded-xl w-full lg:w-auto order-1'
    slidesPerView={1}
    spaceBetween={10}>
        <SwiperSlide>
        <img  src={log}  className='  rounded-md  ' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src={log}  className=' rounded-md ' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src={log}  className='  rounded-md ' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src={log}  className='  rounded-md ' />
        </SwiperSlide>
    
    </Swiper>
     
 

      
    </div>
  )
}

export default MapImages
