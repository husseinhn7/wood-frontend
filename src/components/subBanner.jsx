import React from 'react'
import sub from "../assets/sub.webp"
import submob from "../assets/subMob.webp"
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";



const SubBanner = () => {
  return (
    <div className='w-full relative mask'>
        <img   src={sub}    className='md:block hidden'  />
        <img  src={submob}    className='md:hidden w-full'  />
        <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center" >  
            <div className='flex items-center justify-center flex-col gap-3'>
                <h1 className=' text-4xl text-slate-50'> title</h1>
                <span className='text-slate-50 inline-block' ><Link to="/" > Home </Link> <IoIosArrowForward  className='text-slate-50 inline-block'  /> <Link to="#"> bestsellers </Link></span>
            </div>
        </div>
    </div>
  )
}

export default SubBanner
