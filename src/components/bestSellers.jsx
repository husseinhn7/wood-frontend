import React from 'react'
import Card from './card'

const BestSellers = () => {
  return (
    <div className=' flex items-center justify-center flex-col'>
        <h1 className=' text-xl my-7'>Our Bestsellers</h1>
        <div className=' flex items-center  justify-between gap-5 '>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>


      
    </div>
      
    </div>
  )
}

export default BestSellers
