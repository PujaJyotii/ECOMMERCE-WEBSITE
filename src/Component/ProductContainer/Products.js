import React from 'react';
import { Button, Card } from 'react-bootstrap'
import classes from './Product.module.css'
import { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import { Link } from 'react-router-dom';



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
      <Link to={`/product/${props.title}`}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Price: ${props.price}
        </Card.Text>
        </Link>
        <Button variant="primary" style={{
            position:'absolute',
            bottom: '5px',
            right: '5px'
          }} onClick={() => addToCartHandler(1)} >Add to Cart</Button>
      </Card.Body>
    </Card>
    
  );
};

export default Products;