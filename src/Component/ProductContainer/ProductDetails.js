import React from "react";
import { Row , Col , Container ,Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from './ProductDetails.module.css'

  


const ProductDetails = ({ productsArr }) => {
  const { productId } = useParams();
  const product = productsArr.find((item) => item.title === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title,  price,imageUrl,reviews} = product;

  // Calculate average rating
  
  return (
    <Container className={classes.container}>
      <Row>
        <Col sm={6}>
          <img src={imageUrl} alt="Product"/>
        
        </Col>
        <Col sm={6}>
          <h2 style={{marginTop:'10px'}}>Product Details</h2>
          <h3>{title}</h3>
          <p>Price:${price}</p>
          <p>Rewiews:</p>
          <p>{reviews}</p>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  )
};

export default ProductDetails;