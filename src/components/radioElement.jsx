import React from 'react'






const RadioElement = ({id, name}) => {
  return (
    <>
        <label 
            htmlFor={id} 
            className=' w-32   bg-gray-100 rounded-lg border-gray-300 border text-center p-2 hover:cursor-pointer' > radio 1 </label>
        <input  
                type='radio' 
                id={id}  
                name={name}  
                className='hidden'     />
    </>
  )
}

export default RadioElement
