import React from 'react'

const Popup = ({children ,open, setOpen, dir}) => {
    const close = () =>{
        setOpen(false)
    }
  return (
    <div
            onClick={close}
            className={` w-screen h-screen backdrop-blur-sm flex  mask z-10 items-center ${open ? "" : "hidden"}  fixed top-0 left-0 ${dir == "l" ? "justify-start" : "justify-end"} `}>
        <div onClick={(e)=>e.stopPropagation()} className='z-20  p-5'>
            { children }
        </div>
    </div>
  )
}

export default Popup
