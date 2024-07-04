import React from 'react'
import ReasonElement from './reasonElement'
import reason1 from  "../assets/Vector_3_1.png"
import reason3 from  "../assets/Vector_2_1.png"
import reason2 from "../assets/Group_11_1.png"
import reason4 from "../assets/original_products (1).png"
import reason5 from "../assets/Group_1804_1.png"
import reason6 from "../assets/Vector_4_1.png"




const ReasonsSection = () => {
  return (
    <div className='flex flex-col gap-3 w-full items-center mb-10'>
        <h3 className=' font-bold text-3xl mb-5'> REASONS TO CHOOSE ENJOY THE WOOD MAPS </h3>
        <div className=' flex w-full items-center justify-evenly'>
            <ReasonElement  image={reason1} text="We were the first creators of wooden world maps on the market!"  />
            <ReasonElement  image={reason2} text="Our wooden maps are protected by the international patent. "  />
            <ReasonElement  image={reason3} text="We've received 1000+ Five Star reviews all across social media."  />
        </div>
        <div className=' flex w-full items-center justify-evenly'>
            <ReasonElement  image={reason4} text="Established in 2014, Enjoy The Wood filed for the trademark ENJOY THE WOOD in 2016."  />
            <ReasonElement  image={reason5} text="Since 2014, we have sold our wooden wall maps to 150,000 happy customers in 90 countries."  />
            <ReasonElement  image={reason6} text="Our facilities in Ukraine were destroyed in February 2022 but we have survived, rebuilt and restarted the production."  />
        </div>
      
    </div>
  )
}

export default ReasonsSection
