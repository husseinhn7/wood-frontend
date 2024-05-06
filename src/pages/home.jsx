import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import CategorySection from '../components/categorySection'
import Card from '../components/card'
import BestSellers from '../components/bestSellers'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <CategorySection />
        <BestSellers /> 
    </>
  )
}

export default Home
