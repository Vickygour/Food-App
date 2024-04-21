import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/pages/Home/Home'
import Place_order from './Components/pages/PlaceOrder/Place_order'
import Cart from './Components/pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import Login from './Components/Login/Login'

function App() {
 const [LoginCart,SetLoginCart]=useState(false)

  return (

    <>
    {
      LoginCart?<Login SetLoginCart={SetLoginCart}/>:<></>
    }
    <div className="App">
     <Navbar SetLoginCart={SetLoginCart}/>
      <Routes>
      
        <Route path='' element={<Home/>}/>
        <Route path='/Place-order' element={<Place_order/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
