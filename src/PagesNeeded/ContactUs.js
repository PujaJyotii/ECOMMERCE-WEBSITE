import { Button, Card, Form } from "react-bootstrap"
import classes from './AboutInformation.module.css'

const ContactUs = () => {
    return (<>
<div className={classes.header}>
    <h1 className={classes['header-text']}>The Generic</h1>
  </div>
  <div className="d-flex justify-content-center align-items-center h-100">
<Card  style={{width:'40rem'}} className="mb-4 mt-4 " border="primary">
    <Card.Body  >
<Form  >
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" placeholder="Enter your name" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Enter Email</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control type="Number" placeholder="Phone Number" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
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