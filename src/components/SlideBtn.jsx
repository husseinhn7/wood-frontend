import React from 'react'
import { useSwiper } from 'swiper/react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";




const SlideBtn = ({type}) => {
    const swiper = useSwiper()

  return ( 
    <button
      className=' flex items-center justify-center rounded-full bg-slate-100 w-14 h-14 shadow-lg relative top-0 left-0 '
    
    onClick={type == "next" ? () => swiper.slideNext() :() => swiper.slidePrev() }>
    
    {type=="next" ? <IoIosArrowBack className='  text-2xl text-slate-400 transition-all hover:mr-3' /> : <IoIosArrowForward className='text-slate-400 text-2xl transition-all  hover:ml-3' />}
    
    
    </button>
  )
}

export default SlideBtn
