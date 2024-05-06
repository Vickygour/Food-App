import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Contexts/StoreContext'

 

const Navbar = ({SetLoginCart}) => {
    const  [menu, setmenu]=useState("Home")
  const { getTotalCartAmount }=useContext(StoreContext)
  return (
    <>
       <div className="Navbar">
        <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
        <ul>
        <Link onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#Explore' onClick={()=>setmenu("Menu")} className={menu === "Menu"?"active":""}>Menu</a>
        <a href='#Contact' onClick={()=>setmenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#Footer' onClick={()=>setmenu("Contact")} className={menu==="Contact"?"active":""}>Contact</a>
        </ul>
        <div className="Right-navbar">
        <div className="search-icon">
            <img src={assets.search_icon} alt="" />
        </div>
            <div className="basket-icon">
                <Link to="/Cart"><img src={assets.basket_icon} alt="" />   </Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <div className="btn">
                 <button onClick={()=>SetLoginCart(true)}>Sign in</button>
            </div>
        </div>
       </div>
    </>
  )
}

export default Navbar
