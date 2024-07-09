import React from 'react'
import SubBanner from '../components/subBanner'
import MainLayout from '../components/mainLayout'
import Card   from '../components/card'
import ProductCard from '../components/productCard'
import WishlistCard from '../components/wishlistCard'


const WishListPage = () => {
  return (
    <MainLayout>
      <h1 className=' text-3xl w-full text-center my-12'>Your Wishlist</h1>
      <div className=' flex  items-center justify-center flex-wrap gap-10   p-10'>
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
        <WishlistCard  />
      
      </div>
      
    </MainLayout>
  )
}

export default WishListPage
