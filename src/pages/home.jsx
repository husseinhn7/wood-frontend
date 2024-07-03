import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import CategorySection from '../components/categorySection'
import Card from '../components/card'
import BestSellers from '../components/bestSellers'
import WhoWeAreSection from '../components/whoWeAreSection'
import Features from '../components/features'
import TestimonyCard from '../components/testimonyCard'
import TestimonialsSection from '../components/testimonialsSection'
import Footer from '../components/footer'
import MainLayout from '../components/mainLayout'
const Home = () => {
  return (
    <MainLayout>
        <Hero />
        <CategorySection />
        <BestSellers /> 
        <WhoWeAreSection />
        <TestimonialsSection />
        <Features />        
    </MainLayout>
  )
}

export default Home
