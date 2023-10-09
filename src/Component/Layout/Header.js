


import React, { useContext } from 'react';
import { Navbar, Nav, Button, Badge} from 'react-bootstrap';

import CartContext from '../../Store/CartContext';
import AuthContext from '../../Store/auth-context';





const Header = (props) => {
 const cartCtx= useContext(CartContext)
 const totalNumber = cartCtx.items.reduce((curr,item) => (curr+item.quantity),0)
 const authCtx =useContext(AuthContext);

const isLoggIn = authCtx.isLoggIn;
const logoutHandler = () => {
  authCtx.logout()
  
}
    return (
    
            <div>
      
        <Navbar bg="dark" variant="dark" fixed='top'>
          <Nav className="mx-auto">
          {isLoggIn && <Nav.Link href="/store">
          <h3>Store</h3>
        </Nav.Link>}
          {isLoggIn && <Nav.Link href="/home">
          <h3>Home</h3>
          </Nav.Link>}
        
        {isLoggIn && <Nav.Link href="about">
          <h3>About</h3>
        </Nav.Link>}
        {!isLoggIn && <Nav.Link href="/login">
          <h3>logIn</h3>
          </Nav.Link>}
        {isLoggIn && <Nav.Link href="contactUs">
          <h3>ContactUs</h3>
        </Nav.Link>}
        {isLoggIn &&
          <Button bg='transparent' onClick={logoutHandler}>logout</Button>
        }
          </Nav>
        <Nav >
        {isLoggIn && <Button variant="light" onClick={props.onShowCart}>
          Cart
          <Badge pill variant="danger" style={{ verticalAlign: 'super' }}>
        {totalNumber}
      </Badge>
        </Button>}
    
        </Nav>
          
        </Navbar>

         
         
         </div>
      );

};

export default Header
