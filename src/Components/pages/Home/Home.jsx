import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Explore_menu from '../../Explore_menu/Explore_menu'
import FoodDisplay from '../../FoodDisplay.jsx/FoodDisplay'
import AppStore from '../../AppStore/AppStore'

const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <>
       <Header/>
       <Explore_menu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}/>
       <AppStore/>
    </>
  )
}

export default Home
