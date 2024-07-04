import React from 'react'
import "../App.css"
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const CategoryCard = ({bgImage}) => {
  return (
    <Link to='#'>
      <div    style={{'--image-url': `url(${bgImage})`}}
              className='h w-[20vw] h-[20vh] flex items-center bg-slate-400
              bg-[image:var(--image-url)]
              rounded-md  justify-end pb-6 flex-col         
              '>
              <div className=' w-14 h-14 m flex justify-center items-center bg-white rounded-full'     >
                  <MdArrowForwardIos className=' text-opacity-0'  />
              </div>
              <h1 className=' text-white font-bold  text-2xl'> hello </h1>
      </div>
    </Link>
  )
}


export default CategoryCard
