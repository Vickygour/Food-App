import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({SetLoginCart}) => {
  const [title,setTitle]=useState("Sign Up")
  return (
   <>
    <div className="Login_Contain">
      <div className="Login_popup">
        <form action="">
         <div className="Login_title">
          <h2>{title}</h2>
          <img onClick={()=>SetLoginCart(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="input_take">
          {title==="Login"?<></>: <input type="text" placeholder='Name' />}
           
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>{title==="Sign Up"?"Create Accout":"Login"}</button>
          </div>
          
          <div className="login-popup-condition">
            
            <p><input type="checkbox" required /> By contuning, i agree to the terms of use & privacy policy</p>
          </div>
          {
            title==="Login"?<p>Create a new account? <span className='Sign' onClick={()=>setTitle("Sign Up")}>Click here</span></p>:<p>Already here an account <span className='Sign' onClick={()=>setTitle("Login")}>Login here</span></p>
          }
        </form>
      </div>
      </div>
    
   </>
  )
}

export default Login
