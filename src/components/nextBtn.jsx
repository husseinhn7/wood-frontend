import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const NextBtn = ({ref}) => {
  return (
    <div refr={ref} className='cursor-pointer flex items-center justify-center rounded-full bg-slate-100 w-14 h-14 shadow-lg relative top-0 left-0'>
        <IoIosArrowBack className='  text-2xl text-slate-400 transition-all hover:mr-3' />
    </div>
  )
}

export default NextBtn
