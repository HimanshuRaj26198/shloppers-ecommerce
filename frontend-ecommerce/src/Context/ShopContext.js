import { createContext, useEffect } from "react";

import { useState } from "react";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
     let cart = {};
     for (let index = 0; index < 300 + 1; index++) {
          cart[index] = 0
     }
     return cart;
}
const ShopContextProvider = (props) => {
     const [all_product, setAll_Product] = useState([]);
     const [cartItems, setCartItems] = useState(getDefaultCart());

     useEffect(() => {
          fetch("http://localhost:4000/allproducts")
               .then((res) => res.json()).then((data) => setAll_Product(data))
     }, [])


     const addToCart = (elemId) => {
          setCartItems((prev) => ({ ...prev, [elemId]: prev[elemId] += 1 }));
     }


     const removeCart = (elemId) => {
          setCartItems((prev) => ({ ...prev, [elemId]: prev[elemId] -= 1 }))
     }

     const getTotalCartAmount = () => {
          let totalAmount = 0;
          for (const item in cartItems) {
               console.log("item");
               if (cartItems[item] > 0) {
                    console.log("IN LOOP")
                    let iteminfo = all_product.find((product) => product.id === Number(item));
                    console.log(iteminfo, "ItemInfo");
                    totalAmount += iteminfo.new_price * cartItems[item]
               }

          }
          return totalAmount;
     }
     const ContextValue = { all_product, cartItems, addToCart, removeCart, getTotalCartAmount };

     return <ShopContext.Provider value={ContextValue}>
          {props.children}
     </ShopContext.Provider>
}

export default ShopContextProvider;