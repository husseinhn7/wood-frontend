import React from 'react'
import { Link } from 'react-router-dom'




const Cart = () => {
  return (
    <div  className='bg-slate-100 rounded-xl flex items-center justify-center md:w-[30vw]   sm:w-[40vw] gap-2 p-10 flex-col h-[90vh] overflow-y-scroll w-[70vw] '>
      <h1 className=' text-lg'>Your cart is empty</h1>
      <Link to="/" className='p-2 bg-[#44B26F] text-white hover:text-[#44B26F] hover:bg-white rounded-md hover:border-[#44B26F] hover:border' >continue  shopping</Link>
    </div>
  )
}

export default Cart
