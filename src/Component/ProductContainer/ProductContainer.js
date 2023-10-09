import {  Col, Container, Row} from "react-bootstrap";
import Products from "./Products";



const productsArr = [

    {

    title: 'Colors',
    name:'Colors',

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

    title: 'Black and white Colors',
    name: 'Black and white Colors',

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

    title: 'Yellow and Black Colors',

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

    title: 'Blue Color',

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



    return (
        <>
      <Container className="justify-content-center">
        <Row className="justify-content-center">
        
        {productsArr.map((items,index) => (
            <Col xs={12} sm={6} md={6} lg={6}  className="mb-5" >
              
            <Products
              key={index}
              title={items.title}
              name={items.name}
              price={items.price}
              img={items.imageUrl}
            />
          
            </Col>
          )
        )}
        </Row>

      </Container>
    </>
    )

}

export default ProductContainer