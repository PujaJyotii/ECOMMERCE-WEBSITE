import { useState } from "react";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Layout/Footer";
import Header from "./Component/Layout/Header";
import CartProvider from "./Store/CartProvider";
import StoreInformation from "./PagesNeeded/StoreInformation";
import AboutInformation from "./PagesNeeded/AboutInformation";
import HomeInformation from './PagesNeeded/HomeInformation';
import ContactUs from "./PagesNeeded/ContactUs";
import { BrowserRouter, Redirect   ,Route, Switch } from "react-router-dom";
import ProductDetails from "./Component/ProductContainer/ProductDetails";
import LoginInformation from "./PagesNeeded/LogInInformation";
import { useContext } from "react";
import AuthContext from "./Store/auth-context";
import Welcome from "./PagesNeeded/Welcome";




  const productsArr = [

    {

    title: 'Colors',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
     additionalImages:['https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
     'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
     'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'],
     reviews: [
      
    
      "Prem: Great product, good quality.",
     
   
    ],

    },

    {

    title: 'Black and white Colors',

    price: 50,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    additionalImages:['https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'],
    reviews: [

      "Prem: Great product, good quality.",
     
   
      
    ]

    },

    {

    title: 'Yellow and Black Colors',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    additionalImages:['https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'],
    reviews: [
  
      
     
   

       "Sikha: worth price.",
    ],

    },

    {

    title: 'Blue Color',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    additionalImages:['https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'],
    reviews: [
      
      "Prem: Great product, good quality.",
     
   
      
    
    ],

    }

    ]






function App() {
  const [showCart,setShowCart]=useState(false);
const authCtx = useContext(AuthContext)
  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }



  return (
    <>
    <CartProvider>
    {showCart && < Cart onClose={hideCartHandler} 
    
    onShowCart={showCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      
      <BrowserRouter>
    <Switch>
      
    
       {authCtx.isLoggIn && <Route path='/store' exact ><StoreInformation /></Route>}
       {authCtx.isLoggIn && <Route path='/about' exact><AboutInformation /></Route>}
      {authCtx.isLoggIn && <Route path='/home' exact ><HomeInformation /></Route>}
      {authCtx.isLoggIn && <Route path='/contactUs'exact><ContactUs/></Route>}
      {authCtx.isLoggIn && <Route path="/product/:productId" exact><ProductDetails  productsArr={productsArr}/></Route>}
      <Route path='/login' exact>
        {!authCtx.isLoggIn && <LoginInformation />}
    </Route>
     
  <Route path='/' ><Welcome /></Route>
  <Route path='*'><Redirect to='/' /></Route>
  </Switch>
      </BrowserRouter>
      <Footer />
      </CartProvider>
    </>
  );
}

export default App;
