import React from 'react'
import SubBanner from '../components/subBanner'
import MainLayout from '../components/mainLayout'
import Card   from '../components/card'
import ProductCard from '../components/productCard'
const BestSellersPage = () => {
  return (
    <MainLayout>
      <SubBanner />
      <div className=' flex  items-center justify-center flex-wrap gap-10   p-10'>
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
      </div>
      
    </MainLayout>
  )
}

export default BestSellersPage
