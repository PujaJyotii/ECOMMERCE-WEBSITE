import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCart={
    items:[],
    totalAmount:0
}

const CartReducer= (state,action) => {
    if(action.type === 'ADD')
  {
      const updatedTotalAmount = state.totalAmount + action.item.price*action.item.quantity;
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if(existingCartItem)
      {
         const updatedItem ={...existingCartItem,
          quantity: existingCartItem.quantity + action.item.quantity
      };
      updatedItems=[...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

      }
      else {

          updatedItems = state.items.concat(action.item)
      }
      return {
          items:updatedItems,
          totalAmount: updatedTotalAmount
      }
  }

  if(action.type === 'PURCHASE')
  {
    return defaultCart
  }
  if(action.type === 'REMOVE')
  {
   const existingCartItem= state.items.findIndex(item => item.id===action.id);
   const existingItem = state.items[existingCartItem]
   const updatedTotalAmount = state.totalAmount - existingItem.price*existingItem.quantity;
   const updatedItems = state.items.filter(item => item.id !== action.id)
   return {
    items:updatedItems,
    totalAmount: updatedTotalAmount
}
  }
    return defaultCart

}

const CartProvider = (props) => {
const [cartState,dispatchCartAction]=useReducer(CartReducer,defaultCart);
    const addItemHandler= (item) => {
        dispatchCartAction({type:'ADD',item:item})
    }

const clearCartHandler = () =>
{
dispatchCartAction({type:'PURCHASE'})
}

const removeItemHandler = (id) => {
    dispatchCartAction({type:'REMOVE',id:id})
}
    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        clearCart:clearCartHandler,
        removeItem:removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}
export default CartProvider;