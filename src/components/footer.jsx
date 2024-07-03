import React from 'react'
import trust from "../assets/trustpilot-1.svg"
import stars from "../assets/stars-4.5 (1).svg"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-[#F2F2F2] flex w-full p-10   items-center  justify-evenly'>
      <div className=' w-1/5    '>
         
        <ul className=' w-full'> 
          <li>
            <img className=' w-full' loading="lazy" src={trust} />
            <img className=' w-full' loading='lazy' src={stars} />
            <p className=' w-full text-center'>Based on 1190 reviews</p>
          </li>
          <li className=' w-full mt-8'>
            <p className=' w-full text-center'>Info at: +14845101185</p>
            <p className=' w-full text-center'>service@enjoythewood.com</p>
          </li>
        </ul>
      
      </div>
      <div className=' w-1/5     
      '> 
        <h2 className='  mb-4 font-semibold'> CUSTOMER CARE </h2>
        <ul className='ml-2 '>
          <li className='mb-2 '>Returns & Exchanges</li>
          <li className='mb-2 '>Terms of Service</li>
          <li className='mb-2 '>Privacy Policy</li>
          <li className='mb-2 '>Shipping & Returns</li>
        </ul>
      
      </div>
      <div className=' w-1/5   '> 
        <h2 className='  mb-4 font-semibold'>FIND OUT MORE  </h2>
        <ul className='ml-2 '>
          <li className='mb-2 '>Our Brand History     </li>
          <li className='mb-2 '>contact us</li>
          <li className='mb-2 '>reviews</li>
          <li className='mb-2 '>blog</li>
        </ul>
      
      </div>
      <div className=' w-1/5   '> 
        <h2 className='mb-2 font-semibold'>Want $20 OFF YOUR FIRST PURCHASE?</h2>
        <ul className='  '>
          <li className='mb-2  text-center'>Sign up with your email address to unlock a $20 credit! Must redeem within 2 days of receipt.     </li>
          <li className='mb-2'><input type='text' className=' outline-none w-full rounded h-10 p-4' placeholder='Your E mail'  /></li>
          <li className=''><button className=' outline-none w-full  h-10   bg-[#44B26F] text-white hover:text-[#44B26F] hover:bg-white rounded hover:border-[#44B26F] hover:border' > GET $10 CREDIT </button></li>
         </ul>
      
      </div>
    </div>
  )
}

export default Footer
