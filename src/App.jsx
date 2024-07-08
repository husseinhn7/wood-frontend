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



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
      <Route  path='/' element={<HomePage />}   />
      <Route  path='/bestsellers' element={<BestSellersPage /> } />
    
    </Routes>
    
    </>
  )
}

export default App
