import React from 'react'
import logo from '../assets/Logo.svg'
import Men from './men'
import { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import MenuItem from './menuItem';
import { HiMiniBars3 } from "react-icons/hi2";





const Header = () => {
  const [ open , setOpen ] = useState(false) 

  return (
    <header className=' flex justify-between items-center  bg-white p-3 sticky top-0 shadow-md'>
        <div className='md:hidden text-3xlg w-1/5' ><HiMiniBars3 className='text-3xlg'/></div>
        <img src={logo} className='max-h-12 w-1/5'   />

            <div className='md:block hidden'>
              <ul className=' flex justify-between items-center gap-2' >
              
              <MenuItem title="secound" link="/fuck"   />
              <MenuItem title="secound" link="/fuck"   />
              <MenuItem title="secound" link="/fuck"   />
              <MenuItem title="secound" link="/fuck"   />
              
              </ul>
          
            </div>
            <div className='  flex justify-between items-center gap-4 w-1/5'>
            <div className='  flex justify-between items-center gap-4 '>
                <IoMdHeartEmpty  className=' text-3xl'/>
                <IoPersonOutline  className=' text-3xl'/>
                <HiOutlineShoppingBag  className=' text-3xl'/>
            </div>
          </div>
    </header>
    
      
   
  )
}




export default Header
