import React from 'react'
import LoginForm  from '../components/loginForm'
import logImage from "../assets/login.webp"
import MainLayout from '../components/mainLayout'
import { useParams } from 'react-router'
import RegisterForm from '../components/register'
import ForgotPasswordForm from '../components/forgotPasswordForm'

const LoginPage = () => {
    const {type} = useParams()
    console.log(type)
  return (
    <MainLayout>
        <div className='my-10 flex md:flex-row  flex-col items-center justify-evenly'>
            <img  className=' rounded-md md:w-2/5 w-11/12' src={logImage} />
            {  type == "login"  &&  <LoginForm />}
            {  type == "register"  &&  <RegisterForm />}
            {  type == "forgotpassword"  &&  <ForgotPasswordForm />}
        </div>
    </MainLayout>
  )
}

export default LoginPage
