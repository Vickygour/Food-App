import React from 'react';
import './Explore_menu.css';
import { menu_list } from '../../assets/assets';

const Explore_menu = ({ category, setCategory }) => {
  return (
    <div className="Explore_menu" id='Explore'>
      <div className="section">
        <h1>Explore our menu</h1>
        <p>Choose from a diverse menu featuring a detectable array of dishes. Our mission to satisfy your craving and elevate your dining experience. one delicious meet at a time</p>
        <div className="menu_list">
          {menu_list.map((item, index) => (
            <div className="CARD" onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index}>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Explore_menu;
