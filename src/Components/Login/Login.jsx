import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({SetLoginCart}) => {
  const [title,setTitle]=useState("Login")
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
          {title==="Login"?<></>: <input type="text" />}
           
            <input type="email" />
            <input type="password" />
          </div>
          <button>{title==="Sign Up"?"Create Accout":"Login"}</button>
        </form>
      </div>
      </div>
    
   </>
  )
}

export default Login
