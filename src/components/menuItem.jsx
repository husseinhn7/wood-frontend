import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const MenuItem = ({title , link }) => {

  return (
    <li className=' flex content-center items-center hover:text-opacity-60'>
        <a href={link}>      {title}     </a> <IoIosArrowDown className='ml-3'/>
    </li>
  )
}

export default MenuItem
