import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import CartContext from '../../Store/CartContext';
import classes from './Product.module.css'



const Products = (props) => {
 const cartCtx= useContext(CartContext);

 const addToCartHandler = quantity => {
  cartCtx.addItem({
    id:props.title,
    title:props.title,
    name:props.name,
    quantity:quantity,
    price:props.price,
    img:props.img
  })
  
 }
  return (
    
    <Card style={{ width: '300px',
    height: '500px' ,
    marginTop:'20px'}}>
      <Card.Img   variant="top" src={props.img}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} className={classes['product-image']} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Price: ${props.price}
        </Card.Text>
        <Button variant="primary" style={{
            position:'absolute',
            bottom: '5px',
            right: '5px'
          }} onClick={() => addToCartHandler(1)}>Add to Cart</Button>
      </Card.Body>
    </Card>
    
  );
};

export default Products;