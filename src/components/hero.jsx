import React from 'react'
import hero from '../assets/hero.webp'
import featuremob from '../assets/X-MAS.png'
import feature from '../assets/features.png'
import mg from '../assets/mg.jpg'
import mob from '../assets/mob.webp'
import ne from "../assets/ne.jpg"
import n from "../assets/n.jpg"
import p from '../assets/p.jpg'
import CategoryCard from './categoryCard'






const Hero = () => {
  return (

    <div className= "bg-[url('../assets/hero.webp')] w-full overflow-hidden">
    <img   src={hero}    className='md:block hidden'  />
    <img   src={mob}    className='md:hidden'  />

    <div className=' flex-wrap	flex w-100  justify-center items-center mt-4'>
    <img src={featuremob}   className='md:hidden'     />
    <img src={feature}  className='md:block hidden my-5' />
    <div className=' flex flex-col items-center'>
      <h1>Hussein.dev</h1>
      <h1 className=' text-3xl m-4'>shop by category</h1>
      
    
    </div>

</div>


      
    </div>
  )
}

export default Hero
