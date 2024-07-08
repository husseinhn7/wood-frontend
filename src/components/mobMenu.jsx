import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './menuItem'

const MobMenu = () => {
  return (
    <div className='bg-slate-100 rounded-xl flex h-60 w-60 p-10 flex-col'>
    <MenuItem title="BESTSELLERS" link="/bestsellers" menu={false}  />
    <MenuItem title="WORLD MAPS" link="/" menu={true}   />
    <MenuItem title="CANVAS" link="/canvas"   />
    <MenuItem title="SHOP ALL" link="/"   />
    <MenuItem title="INFO" link="/"   />

      
    </div>
  )
}

export default MobMenu
