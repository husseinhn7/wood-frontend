import React from 'react'
import "../App.css"
import { MdArrowForwardIos } from "react-icons/md";

const CategoryCard = ({bgImage}) => {
  return (
    <a href='#'>
    <div    style={{'--image-url': `url(${bgImage})`}}
            className='h w-80 h-80 flex items-center bg-slate-400
            bg-[image:var(--image-url)]
            rounded-md  justify-end pb-6 flex-col         
            '>
            <div className=' w-14 h-14 m flex justify-center items-center bg-white rounded-full'     >
                <MdArrowForwardIos className=' text-opacity-0'  />
            </div>
            <h1 className=' text-white font-bold  text-2xl'> hello </h1>
    </div>
    </a>
  )
}

export default CategoryCard
