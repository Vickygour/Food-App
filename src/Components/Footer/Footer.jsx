import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <>
        <div className="Footer" id='Footer'>
            <div className="Footer-Content">
                <div className="Footer-left">
                    <img src={assets.logo} alt="" className='logo_' />
                    <p> Quasi earum Unde ipsum amet in doloribus consequatur facilis vero non veritatis laudantium. Nemo explicabo voluptates atque repudiandae!
                   .</p>
                   <div className="logos">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                   </div>
                </div>
                <div className="Footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                </div>
                <div className="Footer-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-121-454-8594</li>
                    <li>contact@tomato.com</li>
                    
                </ul>
                </div>
                
            </div>
            <hr />
                <p className='copyright'>Copyright 2024 © tomato.com All Right Reserved</p>
        </div>
    </>
  )
}

export default Footer
