import React from 'react'
import logo from '../assets/Logo.svg'
import { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import MenuItem from './menuItem';
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import MobMenu from './mobMenu';
import Popup from './popup';




const Header = () => {
  const [ open , setOpen ] = useState(false) 

  return (
    <header className=' flex justify-between items-center  bg-white p-3 sticky top-0 shadow-md z-50'>
        <button onClick={()=>setOpen(true)} className='md:hidden   w-1/5' ><HiMiniBars3 className='text-2xl'/></button>
        <Popup open={open} setOpen={setOpen}>
          <MobMenu />
        
        
        </Popup>
        <div className='w-1/5 flex justify-end items-center'> 
        <img src={logo} className='h-12 '   />
        </div>
            <div className='md:block hidden'>
              <ul className=' flex justify-between items-center  gap-5' >
              
              <MenuItem title="BESTSELLERS" link="/bestsellers" menu={false}  />
              <MenuItem title="WORLD MAPS" link="/" menu={true}   />
              <MenuItem title="CANVAS" link="/canvas"   />
              <MenuItem title="SHOP ALL" link="/"   />
              <MenuItem title="INFO" link="/"   />

              
              </ul>
          
            </div>
            <div className='  flex justify-between items-center md:gap-4 md:w-1/5'>
            <div className='  flex justify-evenly gap-2 md:justify-between items-center md:gap-4 '>
                <IoMdHeartEmpty  className=' text-2xl'/>
                <IoPersonOutline  className=' text-2xl'/>
                <HiOutlineShoppingBag  className=' text-2xl'/>
            </div>
          </div>
    </header>
    
      
   
  )
}




export default Header
