import React from 'react'
import SubFeature from './subFeauter'
import { BsGlobeAmericas } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa6";




const Features = () => {

  return (
    <>
    
    
    <div className=' flex flex-col gap-6 items-center  mb-5'>
            <h1 className=' font-bold text-3xl mb-5'> 
            Why You'll Love Wood World Map From Enjoy The Wood</h1>
    <div className=' flex justify-between  px-8'>
        <SubFeature 
            icon={<BsGlobeAmericas className=' text-white text-4xl'/>}
            title="100% Unique Expert Craftsmanship"
            paragraph="Buying unique décor at Enjoy The Wood company is synonymous with quality of origin. Shop for the very best in unique and custom handmade décor pieces!"
        />

        <SubFeature 
        icon={<FaRegStar className=' text-white text-4xl'/>}
        title="Standout Quality"
        paragraph="Treat yourself to top-quality, incredibly realistic, and artfully illustrated wooden world map wall decor. Excellence confirmed by ⭐ 20,000 positive reviews of satisfied users!"
    />

    <SubFeature 
    icon={<GoGoal className=' text-white text-4xl'/>}
    title="Style Making a Difference"
    paragraph="Patent qualityEnjoy The Wood maps pair well with all existing designs, adding an extra wow factor the any interior. From styling interior advice to helping you pick a specific wooden wall decor, our advisors are ready to assist."
/>

<SubFeature 
icon={<FaRegHeart className=' text-white text-4xl'/>}
title="Tailored to You"
paragraph="We can customize a wooden world map wall decor to your style. We can change the size, add details,  add personal info, and do all kinds of personalization. Our craftsmen have loads of ideas. Just ask!"
/>

<SubFeature 
icon={<BiLike className=' text-white text-4xl'/>}
title="All-In-One Purchase"
paragraph="Enjoy The Wood world map makes a standout interior spot. Express your style, plan your next trips, track previous adventures, or get an investment-worthy Enjoy The World wooden map as a gift!"
/>
      
    </div>
    </div>

    </>
  )
}

export default Features
