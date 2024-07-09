import React from 'react'
import { Link } from 'react-router-dom'



const LoginForm = () => {
  return (
    <div className=' flex flex-col md:w-2/5 w-11/12  md:px-20 gap-4'>
        <h1 className='text-3xl text-center mt-2' > my account </h1>
        <p className=' text-center'> if you have an account with us please login </p>
        <div className=' flex flex-col   w-full   gap-4 '>
            <input placeholder='E-Mail' className='px-4 outline-none border border-slate-200 h-12 rounded-md focus:border-slate-600' />
            <input placeholder='Password'  className='px-4 outline-none border border-slate-200 h-12 rounded-md focus:border-slate-600' />
            <Link to="/forgotpassword" className='  text-slate-400' > forgot your password? </Link>
            <button className=' text-xl outline-none w-full  h-12   bg-[#44B26F] text-white hover:text-[#44B26F] hover:bg-white rounded-md hover:border-[#44B26F] hover:border'> LOGIN </button>
            <Link to="/register" className='  text-slate-400 text-center w-full' > dont have an account? register now  </Link>
        </div>
    </div>
  )
}

export default LoginForm
