import { useState } from "react";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Layout/Footer";
import Header from "./Component/Layout/Header";
import CartProvider from "./Store/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StoreInformation from "./PagesNeeded/StoreInformation";
import AboutInformation from "./PagesNeeded/AboutInformation";
import HomeInformation from './PagesNeeded/HomeInformation';
import ContactUs from "./PagesNeeded/ContactUs";

function App() {
  const [showCart,setShowCart]=useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }

  const router=createBrowserRouter([
    {path:'/',element:<StoreInformation/>},
    {path:'/about',element:<AboutInformation/>},
    {path:'/home',element:<HomeInformation />},
    {path:'/contactUs',element:<ContactUs/>}
    
  ])

  return (
    <>
    <CartProvider>
    {showCart && < Cart onClose={hideCartHandler} 
    
    onShowCart={showCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      </CartProvider>
      <RouterProvider  router={router} />
      <Footer />
    </>
  );
}

export default App;
