import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';





const MenuItem = ({title, link, menu }) => {

  return (
    <li className=' flex content-center items-center hover:text-opacity-60 font-bold hover:font-semibold '>
      <Link to={link}>      {title}     </Link> 
      {menu && <IoIosArrowDown className='ml-3'/>}
    </li>
  )
}

export default MenuItem
