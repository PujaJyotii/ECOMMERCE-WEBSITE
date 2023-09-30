import {  Col, Container, Row} from "react-bootstrap";
import Products from "./Products";


const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    

const ProductContainer = () => {

  

    return (
        <>
      <Container className="justify-content-center">
        <Row className="justify-content-center">
        {productsArr.map((items) => (
            <Col xs={12} sm={6} md={4} lg={5}  className="mb-5" >
            <Products
              key={items.title}
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