import React, { useContext } from 'react';
import { Button, Card, Modal, Row, Col } from 'react-bootstrap';
import AuthContext from '../../Store/auth-context';


const Cart = (props) => {
   
   const authCtx = useContext(AuthContext)
  
    const hasItems = authCtx.item.length > 0;
  

    function removeItemCart(id) {
      authCtx.removeItems(id);
    }
    let multiplyItemsandPrice = 0;
    for (const item of authCtx.item) {
      multiplyItemsandPrice += +item.price * item.quantity;
    }

  return (
    <Modal show={props.onShowCart} onHide={props.onClose}>
    <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {authCtx.item.map((product) => (
        <Card key={product.title} className="my-2">
          <Card.Body>
            <Row>
              <Col md={2}>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="img-fluid"
                />
              </Col>
              <Col md={8}>
                <h5>{product.title}</h5>
                <p>Price: ${product.price}</p>
                
                <Button variant="outline-primary">{product.quantity}</Button>
                <Button
                      variant="primary"
                      style={{
                        position:'absolute',
                        bottom: '5px',
            right: '5px',
                      }}

                    onClick={() => removeItemCart(product.id)}>
                      Remove
                    </Button>
              </Col>
            
            </Row>
          </Card.Body>
          
        </Card>
        
      ))}

    

      <span style={{fontWeight:'bolder',fontSize:'25px'}}>Total Amount:$</span>
        <span style={{fontWeight:'bolder',fontSize:'25px'}}>{multiplyItemsandPrice }</span>
    </Modal.Body>
    <Modal.Footer>
        
        {hasItems && <Button variant='primary' >Purchase</Button>}
    </Modal.Footer>
    </Modal>
  );
};

export default Cart





