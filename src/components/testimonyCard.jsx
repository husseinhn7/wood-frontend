import React from 'react'
import img from "../assets/Natural-Color-Maps_1.webp"





const TestimonyCard = () => {
  return (
    <div className=' flex h-96 w-60 bg-black flex-col   rounded-xl  overflow-clip ml-3'>
        <img className='h-1/2 w-full' src={img} /> 


        <div className='flex h-1/2 bg-[#F2F2F2] w-full flex-col items-center justify-evenly'>
            <h2>Name</h2>
            <p>text</p>
        </div>
    </div>
  )
}

export default TestimonyCard
