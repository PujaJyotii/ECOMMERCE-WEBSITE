import React, { useContext } from 'react';
import { Button, Card, Modal, Row, Col } from 'react-bootstrap';
import CartContext from '../../Store/CartContext';


const Cart = (props) => {
   const cartCtx =useContext(CartContext);
   const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const orderHandler = () => {
        cartCtx.clearCart()
        alert('Thank you! we got your order')

    }

    const removeHandler = (id) => {
        cartCtx.removeItem(id)
    }

  return (
    <Modal show={props.onShowCart} onHide={props.onClose}>
    <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cartCtx.items.map((product) => (
        <Card key={product.title} className="my-2">
          <Card.Body>
            <Row>
              <Col md={2}>
                <img
                  src={product.img}
                  alt={product.title}
                  className="img-fluid"
                />
              </Col>
              <Col md={8}>
                <h5>{product.title}</h5>
                <p>Price: ${product.price}</p>
                <p>Quantity:{product.quantity}</p>
                <Button
                      variant="primary"
                      style={{
                        position:'absolute',
                        bottom: '5px',
            right: '5px',
                      }}

                    onClick={() => removeHandler(product.title)}>
                      Remove
                    </Button>
              </Col>
            
            </Row>
          </Card.Body>
          
        </Card>
        
      ))}

    

      <span style={{fontWeight:'bolder',fontSize:'25px'}}>Total Amount:$</span>
        <span style={{fontWeight:'bolder',fontSize:'25px'}}>{totalAmount}</span>
    </Modal.Body>
    <Modal.Footer>
        
        {hasItems && <Button variant='primary' onClick={orderHandler}>Purchase</Button>}
    </Modal.Footer>
    </Modal>
  );
};

export default Cart





