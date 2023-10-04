


import React, { useContext } from 'react';
import { Navbar, Nav, Button, Badge} from 'react-bootstrap';

import CartContext from '../../Store/CartContext';





const Header = (props) => {
 const cartCtx= useContext(CartContext)
 const totalNumber = cartCtx.items.reduce((curr,item) => (curr+item.quantity),0)
    return (
    
            <div>
      
        <Navbar bg="dark" variant="dark" fixed='top'>
          <Nav className="mx-auto">
          <Nav.Link href="/store">
          <h3>Store</h3>
        </Nav.Link>
          <Nav.Link href="/">
          <h3>Home</h3>
          </Nav.Link>
        
        <Nav.Link href="about">
          <h3>About</h3>
        </Nav.Link>
        <Nav.Link href="contactUs">
          <h3>ContactUs</h3>
        </Nav.Link>
          </Nav>
        <Nav >
        <Button variant="light" onClick={props.onShowCart}>
          Cart
          <Badge pill variant="danger" style={{ verticalAlign: 'super' }}>
        {totalNumber}
      </Badge>
        </Button>
    
        </Nav>
          
        </Navbar>

         
         
         </div>
      );

};

export default Header
