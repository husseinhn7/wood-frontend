import React from 'react'
import logo from '../assets/Logo.svg'
import Men from './men'
import { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";

const Header = () => {
  const [ open , setOpen ] = useState(false) 

  return (
    <header className=' flex justify-between items-center  bg-white p-3 sticky top-0 shadow-md'>
    <img src={logo} className=' max-h-12'   />


    <div>
    <ul className=' flex justify-between items-center gap-2' >
    <li>
        link 1
    </li>
     <li>
    link 2
    </li>
    <li>
    link3
    </li>
    </ul>
   
    </div>
    
    <div className='  flex justify-between items-center gap-4 text-7xlg'>
         <IoMdHeartEmpty  className=' text-3xl'/>
         <IoPersonOutline  className=' text-3xl'/>
         <HiOutlineShoppingBag  className=' text-3xl'/>
         
    
    </div>

    
    
    
    </header>
    
      
   
  )
}

export default Header
