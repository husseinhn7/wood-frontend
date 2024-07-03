import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Hero from './components/hero'
import Home from './pages/home'
import "./App.css"
import CategoryCard from './components/categoryCard'
import Footer from './components/footer'
import Swip from './components/swip'
import { Router, Route, Routes } from 'react-router'
import BestSellers from './components/bestSellers'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
      <Route  path='/' element={<Home />}   />
      <Route path='/bestsellers' element={<BestSellers /> } />
    
    </Routes>
    
    </>
  )
}

export default App
