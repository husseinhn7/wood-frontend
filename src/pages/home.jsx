import React from 'react'
import Hero from '../components/hero'
import CategorySection from '../components/categorySection'
import BestSellers from '../components/bestSellers'
import WhoWeAreSection from '../components/whoWeAreSection'
import Features from '../components/features'
import TestimonialsSection from '../components/testimonialsSection'
import MainLayout from '../components/mainLayout'
import ReasonsSection from '../components/reasonsSection'

const Home = () => {
  return (
    <MainLayout>
        <Hero />
        <CategorySection />
        <BestSellers /> 
        <WhoWeAreSection />
        <TestimonialsSection />
        <Features />    
        <ReasonsSection />    
    </MainLayout>
  )
}

export default Home
