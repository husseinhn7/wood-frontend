import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SubFeature from './subFeauter';
import { GoGoal } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa6";
import { BsGlobeAmericas } from "react-icons/bs";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { SwiperSlide, Swiper} from 'swiper/react';


const  FeaturesMob = () => {
  return (
    <div className=' w-full md:hidden'>
        <Swiper
        modules={[Navigation, Pagination,  ]}
            spaceBetween={50}
            slidesPerView = {1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}           
         >
            <SwiperSlide>
             <SubFeature 
            icon={<BsGlobeAmericas className=' text-white text-4xl'/>}
            title="100% Unique Expert Craftsmanship"
            paragraph="Buying unique décor at Enjoy The Wood company is synonymous with quality of origin. Shop for the very best in unique and custom handmade décor pieces!"
        />
            </SwiperSlide>

           
        <SwiperSlide>
        <SubFeature 
        icon={<FaRegStar className=' text-white text-4xl'/>}
        title="Standout Quality"
        paragraph="Treat yourself to top-quality, incredibly realistic, and artfully illustrated wooden world map wall decor. Excellence confirmed by ⭐ 20,000 positive reviews of satisfied users!"
        />
        </SwiperSlide>


      <SwiperSlide>

      <SubFeature 
      icon={<GoGoal className=' text-white text-4xl'/>}
      title="Style Making a Difference"
      paragraph="Patent qualityEnjoy The Wood maps pair well with all existing designs, adding an extra wow factor the any interior. From styling interior advice to helping you pick a specific wooden wall decor, our advisors are ready to assist."
      />

      </SwiperSlide> 


      <SwiperSlide>
      <SubFeature 
      icon={<FaRegHeart className=' text-white text-4xl'/>}
      title="Tailored to You"
      paragraph="We can customize a wooden world map wall decor to your style. We can change the size, add details,  add personal info, and do all kinds of personalization. Our craftsmen have loads of ideas. Just ask!"
      />
      </SwiperSlide>


      <SwiperSlide>
      <SubFeature 
      icon={<BiLike className=' text-white text-4xl'/>}
      title="All-In-One Purchase"
      paragraph="Enjoy The Wood world map makes a standout interior spot. Express your style, plan your next trips, track previous adventures, or get an investment-worthy Enjoy The World wooden map as a gift!"
      />
      </SwiperSlide>

        
        
        
        
        </Swiper>
      
    </div>
  )
}

export default FeaturesMob
