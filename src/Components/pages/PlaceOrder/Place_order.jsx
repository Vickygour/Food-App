import React, { useContext } from 'react'
import './Place_Order.css'
import { StoreContext } from '../../../Contexts/StoreContext'
const Place_order = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
   <>
    <div className="Place_order">
     <div className="Place_Title">
          <h1>Delivery Information</h1>
     </div>
        <div className="place_contain">
          <div className="Place_left">
            <div className="Place_Fields">
              <input type="text" placeholder='Full name' />
              <input type="text" placeholder='Last name' />
            </div>
            <input type="email" placeholder='Email address' />
            <input type="text" placeholder='Street' />
            <div className="Place_Fields">
              <input type="text" placeholder='city' />
              <input type="text" placeholder='State' />
            </div>
            <div className="Place_Fields">
              <input type="text" placeholder='Zip code' />
              <input type="text" placeholder='Country' />
            </div>
            <input type="text" placeholder='Phone' />

          </div>
          <div className="Place_right">
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

              <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
    </div>
   </>
  )
}

export default Place_order
