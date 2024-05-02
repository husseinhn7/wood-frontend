import React from 'react'

const Men = ({ open , set }) => {
  return (
    <div  className={`fixed inset-0 bg-black bg-opacity-0 transition-opacity ${
        open ? 'hidden' : ''
      }`}
    onClick={()=>set(false)}
    >

            hi lilfuck

      
    </div>
  )
}

export default Men
