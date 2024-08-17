import { Button, Card, Form } from "react-bootstrap"
import classes from './AboutInformation.module.css'
import {  useState } from "react"

const ContactUs = () => {
 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
 const [phoneNumber,setPhoneNumber] =useState('')

 const SubmitHandler = async (event) => {
  event.preventDefault()
  if(name.length===0 || email.length===0 || phoneNumber.length===0 )
  {
    return
  }
  const products={
    name:name,
    email:email,
    phoneNumber:phoneNumber
  }
  const response= await fetch('https://ecommerce-react-81679-default-rtdb.firebaseio.com/products.json ',{
    method:'POST',
    body: JSON.stringify(products),
    headers:{
      'Content-Type':'application/json'
    }
  })
  const data = await response.json()
  console.log(data)
  setName('');
  setEmail('');
  setPhoneNumber('')
 }


    


const addNameHandler = (event) => {
  setName(event.target.value)
}

const addEmailHandler = (event) => {
  setEmail(event.target.value)
}

const addPhoneNumber = (event) => {
  setPhoneNumber(event.target.value)
}

return (<>
  <div className={classes.header}>
      <h1 className={classes['header-text']}>The Generic</h1>
    </div>
    <div className="d-flex justify-content-center align-items-center h-100">
  <Card  style={{width:'40rem'}} className="mb-4 mt-4 " border="primary">
      <Card.Body  >
      <Form  onSubmit={SubmitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" onChange={addNameHandler} value={name}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={addEmailHandler} value={email}  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="Number" placeholder="Phone Number"  onChange={addPhoneNumber} value={phoneNumber} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
  </Card.Body>
  </Card>
  </div>
  </>
      )
}

export default ContactUs