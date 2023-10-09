import React from "react";
import { Row , Col , Container ,Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from './ProductDetails.module.css'
import Carousel from 'react-bootstrap/Carousel'

  


const ProductDetails = (props) => {
  
  const { productId } = useParams();
  const product = props.productsArr.find((item) => item.title === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title,additionalImages,  price, reviews} = product;
 
  
  return (
    <Container className={classes.container}>
      <Row>
        <Col sm={6}>
        <Carousel controls={false}>
          
            {
              additionalImages.map((image,index) => {
                return (
                <Carousel.Item key={index}>
                (<img src={image} alt="product"/>)
              
              </Carousel.Item>
              )})
            }
          
        </Carousel>
        
        </Col>
        <Col sm={6}>
          <h2 style={{marginTop:'10px'}}>Product Details</h2>
          <h3>{title}</h3>
          <p>Price:${price}</p>
          <p>Rewiews:</p>
          <p>{reviews}</p>
          <Button variant="primary" >Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  )
};

export default ProductDetails;