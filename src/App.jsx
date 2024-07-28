import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Hero from './components/hero'
import HomePage from './pages/homePage'
import "./App.css"
import CategoryCard from './components/categoryCard'
import Footer from './components/footer'
import Swip from './components/swip'
import { Router, Route, Routes } from 'react-router'
import BestSellers from './components/bestSellers'
import BestSellersPage from './pages/bestSellersPage'
import WishListPage from './pages/wishListPage'
import ProfilePage from './pages/profilePage'
import LoginPage from './pages/loginPage'
import Fun from './components/demo'
import MapPage from './pages/mapPage'
import Test from "./components/geminiTest"

 
function App() {
 
  return (
    <>

    <Routes>
      <Route  path='/' element={<HomePage />}   />
      <Route  path='/bestsellers' element={<BestSellersPage /> } />
      <Route  path='/profile' element={<ProfilePage/>} />
      <Route  path='/wishlist' element={<WishListPage/>} />
      <Route  path='/:type' element={<LoginPage />} />
      <Route  path='/products' element={<MapPage />} />
      <Route  path='/test'  element={<Test /> }/>
    </Routes>
    
    </>
  )
}

export default App
