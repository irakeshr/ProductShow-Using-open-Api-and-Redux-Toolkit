import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Products from './Pages/Products'
import ViewProduct from './Pages/ViewProduct'
import PageNotFound from './Pages/PageNotFound'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/ViewCart'

function App() {
 

  return (
    <>
       <Header/>
       <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/viewCart' element={<Cart/>}></Route>
        <Route path='/viewProduct/:id' element={<ViewProduct/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>

       </Routes>
       <Footer/>
    </>
  )
}

export default App
