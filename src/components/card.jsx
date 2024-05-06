import React from 'react'
import img from '../assets/Natural-Color-Maps_1.webp'
import img2 from "../assets/Map-on-board.webp"
import { FaRegHeart } from "react-icons/fa6";

const Card = ({}) => {
  return (
    <div className='   w-64 rounded hover: cursor-pointer'>
        <div 
          style={{"--main-img" : `url(${img})`,
           "--alt-img" : `url(${img2})`,
           "transition" : "all 0.5s"
          
          }}
          className='bg-[image:var(--main-img)]
            w-64 h-64 bg-no-repeat bg-cover 
            flex justify-end items-end hover:bg-[image:var(--alt-img)]
             transition-all
            
            '
        > 
        
        <span className=' w-8 h-8 rounded-full bg-slate-400 m-2 flex justify-center items-center'   >
           <FaRegHeart className=' text-white '/>
        
        
        </span>
        
        
        </div>

            <div className='flex  justify-center items-center  flex-col '>
                <h6>
                title
                </h6>

                <span>price<span> old price </span> </span> <span> span</span>


            
            </div>
        

    
    
    
    
    </div>
  )
}

export default Card
