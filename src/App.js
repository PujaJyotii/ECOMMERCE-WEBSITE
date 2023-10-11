import { useState } from "react";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Layout/Footer";
import Header from "./Component/Layout/Header";
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
    id:1,
  title: 'Colors',
  name:'Colors',
  quantity:1,
  price: 100,

  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
   additionalImages:['https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
   'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
   'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'],
   reviews: [
    "rating: 5",
    "Prem: Great product, good quality.",
   
 
     "rating: 5",
     "Sikha: worth price.",
  
  ],

  },

  {
id:2,
  title: 'Black and white Colors',
  name: 'Black and white Colors',
  quantity:1,
  price: 50,

  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  additionalImages:['https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'],
  reviews: [
    "rating: 5",
    "Prem: Great product, good quality.",
   
 
     "rating: 5",
     "Sikha: worth price.",
  
  ]

  },

  {
id:3,
  title: 'Yellow and Black Colors',
  quantity:1,
  price: 70,

  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  additionalImages:['https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'],
  reviews: [
    
    
      "Satish :Great product, good quality.",
    
    
      " Prerna :Decent product, could be better.",
    
  
  ],

  },

  {
  id:4,
  title: 'Blue Color',
   quantity:1,
  price: 100,

  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  additionalImages:['https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'],
  reviews: [
  
      "rating: 5",
     "Prem: Great product, good quality.",
    
  
      "rating: 5",
      "Sikha: worth price.",
  
  
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
    
    {showCart && < Cart onClose={hideCartHandler} 
    
    onShowCart={showCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      
      <BrowserRouter>
    <Switch>
      
    
       {authCtx.isLoggedIn && <Route path='/store' exact ><StoreInformation /></Route>}
       {authCtx.isLoggedIn && <Route path='/about' exact><AboutInformation /></Route>}
      {authCtx.isLoggedIn && <Route path='/home' exact ><HomeInformation /></Route>}
      {authCtx.isLoggedIn && <Route path='/contactUs'exact><ContactUs/></Route>}
      {authCtx.isLoggedIn && <Route path="/product/:productId" exact><ProductDetails  productsArr={productsArr}/></Route>}
      <Route path='/login' exact>
        {!authCtx.isLoggedIn && <LoginInformation />}
    </Route>
     
  <Route path='/' ><Welcome /></Route>
  <Route path='*'><Redirect to='/' /></Route>
  </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
