import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [CartItems, setCartItems] = useState({});

    const addCart = (itemId) => { 
        if (!CartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () =>
        {
            let totalAmount = 0;
            for(const item in CartItems)
                {
                    if(CartItems[item]>0)
                        {
                            let itemInfo = food_list.find((product)=>product._id ===item)
                            totalAmount += itemInfo.price * CartItems[item]
                        }
                }
                return totalAmount;
        }

    const contextValue = {
        food_list,
        CartItems,
        setCartItems,
        addCart,
        removeCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
