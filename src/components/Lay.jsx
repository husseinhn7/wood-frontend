import React from 'react'
import bgImage from "../assets/Map_Oak-min.webp"
import bg2 from "../assets/Map_Oak_1_-min.webp"
import Dragg from './dragg'




const Lay = () => {
  return (
    <div
    className=' relative w-[350px] h-[250px] sm:h-[370px] sm:w-[550px]   bg-cover    ' 
    style={{backgroundImage : `url(${bgImage})`}}>

       <Dragg >
            
      </Dragg>

    </div>
  )
}

export default Lay
