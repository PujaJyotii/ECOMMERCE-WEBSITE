import {  Button, Card, Col, Container, Row} from "react-bootstrap";
import { useContext } from 'react';
import classes from'./ProductContainer.module.css'

import { Link } from 'react-router-dom';
import AuthContext from '../../Store/auth-context';



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



const ProductContainer = () => {

  const authCtx =useContext(AuthContext)
  function Itemadded(id) {
    const myobj = productsArr.filter((item) => {
      return item.id === id;
    });
  
  
  authCtx.addItems(myobj[0])
  }

    return (
        <>
      <Container className="justify-content-center">
        <Row className="justify-content-center">
        
        {productsArr.map((items) => (
            <Col key={items.id}  xs={12} sm={6} md={6} lg={6}  className="mb-5" >
              
              <Card style={{ width: '300px',
    height: '500px' ,
    marginTop:'20px'}}>
      <Card.Img   variant="top" src={items.imageUrl}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} className={classes['product-image']} />
      <Card.Body>
      <Link to={`/product/${items.title}`}>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text>
          Price: ${items.price}
        </Card.Text>
        </Link>
        <Button variant="primary" style={{
            position:'absolute',
            bottom: '5px',
            right: '5px'
          }} onClick={() => {Itemadded(items.id);}} >Add to Cart</Button>
      </Card.Body>
          </Card>
            </Col>
          )
        )}
        </Row>

      </Container>
    </>
    )

}


export default ProductContainer