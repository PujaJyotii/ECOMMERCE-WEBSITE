import { useState } from "react";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Layout/Footer";
import Header from "./Component/Layout/Header";
import CartProvider from "./Store/CartProvider";
import StoreInformation from "./PagesNeeded/StoreInformation";
import AboutInformation from "./PagesNeeded/AboutInformation";
import HomeInformation from './PagesNeeded/HomeInformation';
import ContactUs from "./PagesNeeded/ContactUs";
import { BrowserRouter, Route} from "react-router-dom";
import ProductDetails from "./Component/ProductContainer/ProductDetails";


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
      </CartProvider>
      <BrowserRouter>
    
      <Route path='/store' ><StoreInformation /></Route>
      <Route path='/about' ><AboutInformation /></Route>
      <Route path='/' exact ><HomeInformation /></Route>
      <Route path='/contactUs' ><ContactUs/></Route>
      <Route path="/product/:productId"><ProductDetails  productsArr={productsArr}/></Route>
      
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
