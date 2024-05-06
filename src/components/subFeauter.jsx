import React from 'react'

const SubFeature = ({title, paragraph, icon }) => {
  return (
    <div className=' flex flex-col items-center gap-3  w-1/6'>
        <span className=" w-24 h-24 rounded-full  bg-slate-900 flex items-center justify-center"  >
        {icon}
        </span>
        <h1 className=' font-bold  text-center'>{title}</h1>
        <p className='text-center'>{paragraph}</p>
    </div>
  )
}

export default SubFeature
