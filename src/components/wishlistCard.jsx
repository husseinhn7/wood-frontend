import React from 'react'
import { GrClose } from "react-icons/gr";
import img from "../assets/Map-on-board.webp"





const WishlistCard = () => {
  return (
    <div className=' relative h-64 w-64 flex flex-col '>
        <button className='absolute top-4 right-4'>
            <GrClose className=' text-xl ' />
        </button>
        <img  src={img} className=' w-full h-full' />
        <h1 className='w-full text-center m-1'> tittle  </h1>

    </div>
  )
}

export default WishlistCard
