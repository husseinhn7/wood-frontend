import React from 'react'

const ReasonElement = ({image, text}) => {
  return (
    <div className=' flex flex-col gap-3 items-center w-2/3 md:w-3/12 text-center'>
        <img  src={image}  />
        <p>{text}</p>
    </div>
  )
}

export default ReasonElement
