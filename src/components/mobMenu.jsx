import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './menuItem'

const MobMenu = () => {
  return (
    <div className='bg-slate-100 rounded-xl flex  gap-2 p-10 flex-col'>
    <Link  className=' text-2xl' to="/bestsellers"   >BESTSELLERS</Link>
    <Link  className=' text-2xl' to="/"     >WORLD MAPS</Link>
    <Link  className=' text-2xl' to="/canvas"   >CANVAS</Link>
    <Link  className=' text-2xl' to="/"   >SHOP ALL</Link>
    <Link  className=' text-2xl' to="/"   >INFO</Link>
 
      
    </div>
  )
}

export default MobMenu
