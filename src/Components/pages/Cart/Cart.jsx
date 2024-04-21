import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../Contexts/StoreContext'

const Cart = () => {
  const { CartItems, food_list, removeCart } = useContext(StoreContext);

  return (
    <div className="Cart_contain">
      <div className="Cart_title">
        <div className="Cart_element">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (CartItems[item._id] > 0) {
            return (
              <div className="cart-item-title" key={index}>
                <p>{item.name}</p>
                <img src={item.image} alt="" />

              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
