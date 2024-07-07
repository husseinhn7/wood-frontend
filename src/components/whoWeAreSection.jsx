import React from 'react'
import img from "../assets/Group_1632_1_1.webp"
const WhoWeAreSection = () => {
  return (
    <div className=' flex flex-col  justify-between items-center gap-5 w-100 my-8 px-6 '>
        <h1 className=' text-3xl'>Who We Are</h1>
        <p className=' text-center'>We are Enjoy The Wood, the inventors of the Wooden World Maps!
        Today we continue revolutionizing the wall decor market</p>
        <div className='  flex  justify-evenly items-center flex-col md:flex-row '>
        <img src={img} className=' md:w-5/12'   /> 
        <div className=' w-full md:w-5/12  flex flex-col  justify-between items-center gap-5  '>
            <p><span className=' font-bold' > Enjoy The Wood is a family brand </span>founded in 2014. </p>
            <p>Our mission is to give JOY and INSPIRATION to each and everyone who owns our world map wall art. We do what we love and we love what we do.</p>
            <p>Inspired by all your positive reviews, we keep coming up with bigger and better ideas. Your strong ongoing support is a testament to product quality and the dedication of our team.</p>
            <p>
            We put our heart, soul, and creativity into each item and into every detail. Everything we do, we do it for you, our clients, and friends.   
            </p>

        
        </div>

        
        
        </div>
      
    </div>
  )
}

export default WhoWeAreSection
