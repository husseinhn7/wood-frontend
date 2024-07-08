import React from 'react'

const Popup = ({children ,open , setOpen}) => {
    const close = () =>{
        setOpen(false)
    }
  return (
    <div
            onClick={close}
            className={` w-screen h-screen   backdrop-blur-sm flex justify-start mask z-10  items-center ${open ? "" : "hidden"}  fixed top-0 left-0  `}>
        <div onClick={(e)=>e.stopPropagation()} className='z-20'>
            { children }
        </div>
    </div>
  )
}

export default Popup
