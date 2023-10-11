import React from "react";
import { Row , Col , Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from './ProductDetails.module.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";
  


const ProductDetails = (props) => {
  const authCtx =useContext(AuthContext)
  const { productId } = useParams();
  const product = props.productsArr.find((item) => item.title === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title,additionalImages, id, price, reviews} = product;
  
  
  function Itemadded(id) {
    const myobj = props.productsArr.filter((item) => {
      return item.id === id;
    });
  
  
  authCtx.addItems(myobj[0])
  }

  return (
    <Container className={classes.container}>
      <Row>
        <Col sm={6} md={6}>
        <Carousel controls={false}>
          
            {
              additionalImages.map((image,index) => {
                return (
                <Carousel.Item key={index}>
                (<Image style={{width:'500px',height:'250px'}} src={image} alt="product" fluid/>)
              
              </Carousel.Item>
              )})
            }
          
        </Carousel>
        
        </Col>
        <Col sm={6}>
          <h2 style={{marginTop:'10px'}}>Product Details</h2>
          <h3>{title}</h3>
          <p>Price:${price}</p>
          <p>Rewiew:</p>
          <p>{reviews}</p>
          <Button variant="primary" onClick={()=> {Itemadded(id);}}>Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  )
};

export default ProductDetails;