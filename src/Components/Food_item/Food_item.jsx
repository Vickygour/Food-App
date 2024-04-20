import React, { useContext } from 'react';
import './Food_item.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Contexts/StoreContext';

const Food_item = ({ id, name, price, description, image }) => {
  const { CartItems, addCart, removeCart } = useContext(StoreContext);

  return (
    <div className="food_container">
      <div className="food_img">
        <img src={image} alt="" className='food-img' />
        {!CartItems[id] ? 
          <img onClick={() => addCart(id)} src={assets.add_icon_white} alt="" className='Add' />
        : 
          <div className='food_item_item'>
            <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{CartItems[id]}</p> {/* Display CartItems[id] instead of CartItems */}
            <img onClick={() => addCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>

      <div className="food_info">
        <div className="food_name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default Food_item;
