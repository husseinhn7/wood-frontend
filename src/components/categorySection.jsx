import React from 'react'
import CategoryCard from './categoryCard'
import img from "../assets/Natural-Color-Maps_1.webp"
const CategorySection = () => {
  return (
    <div className=' flex items-center justify-between  px-12 flex-wrap m-5'>
        <CategoryCard  bgImage={img}/>
        <CategoryCard  bgImage={img}/>
        <CategoryCard  bgImage={img}/>
        <CategoryCard  bgImage={img}/>
    </div>
  )
}

export default CategorySection
