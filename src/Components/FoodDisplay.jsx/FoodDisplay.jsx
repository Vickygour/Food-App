import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Contexts/StoreContext'
import Food_item from '../Food_item/Food_item'

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext)
  return (
    <div className='Food_display' id='food_display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=> 
      {
         if(category==="All" || category===item.category)
        return <Food_item key={index} id={item._id} description={item.description} price={item.price} image={item.image} name={item.name}/>
      })}
      </div>
    </div>
  )
}

export default FoodDisplay
