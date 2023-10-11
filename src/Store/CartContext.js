import React from "react"

const CartContext=React.createContext({
items:[],
totalAmount:0,
addItem:(item) => {},
purchaseItems:()=>{},
removeItem:(id) => {},
setCartItems: () => {},
})

export default CartContext