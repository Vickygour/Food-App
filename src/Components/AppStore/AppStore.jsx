import React from 'react'
import './AppStore.css'
import { assets } from '../../assets/assets'
const AppStore = () => {
  return (
    <>
        <div className="Play_store" id='Contact'>
            <div className="text_SIde">
                <p>For Better Experience Download <br /> Tomato App</p>
            </div>
            <div className="img">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    </>
  )
}

export default AppStore
