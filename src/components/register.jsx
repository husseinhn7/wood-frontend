import React from 'react'
import { Link } from 'react-router-dom'


const RegisterForm = () => {
  return (
    <div className=' flex flex-col md:w-2/5 w-11/12  md:px-20 gap-4'>
        <h1 className='text-3xl text-center mt-2' >Create Account </h1>
         <div className=' flex flex-col   w-full   gap-4 '>
            <input placeholder='First Name ' className='px-4 outline-none border border-slate-200 h-12 rounded-md focus:border-slate-600' />
            <input placeholder='Last name' className='px-4 outline-none border border-slate-200 h-12 rounded-md focus:border-slate-600' />
            <input placeholder='E-Mail' className='px-4 outline-none border border-slate-200 h-12 rounded-md focus:border-slate-600' />
            <input placeholder='Password'  className='px-4 outline-none border border-slate-200 h-12 rounded-md focus:border-slate-600' />
            <button className=' text-xl outline-none w-full  h-12   bg-[#44B26F] text-white hover:text-[#44B26F] hover:bg-white rounded-md hover:border-[#44B26F] hover:border'> SIGN UP </button>
            <Link to="/login" className='  text-slate-400 text-center w-full' > Already have an account? Sign in  </Link>
        </div>
    </div>
  )
}

export default RegisterForm
