import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../Contexts/StoreContext'
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { CartItems, food_list, removeCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className="Cart_contain">
      <div className="cart-item-title">
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
              <div className="">
                <div className="Cart_element cart-items-item" key={index}>
                
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{CartItems[item._id]}</p>
                <p>{CartItems[item._id]*item.price}</p>
                
                <p className='cross' onClick={()=>removeCart(item._id)}>x</p>
                 
                
              </div>
              <hr />
              </div>

              
             
            );
            
          }
        })}
      </div>


      <div className="cart_bottom">
        <div className="cart_proceed">
          <h2>Cart Totals</h2>
          <div className="total_side">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="total_side">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:+2}</p>
          </div>
          <hr />
          <div className="total_side">
            <p className='highlight'>Total</p>
            <p className='highlight'>${getTotalCartAmount()}</p>
          </div>
          <hr />

          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart_promo">
          <div className="promo_side">
            <p>If you have promo code, Enter it here</p>
          </div>
          <div className="input_side">
            <input type="text"  placeholder='Enter your promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
