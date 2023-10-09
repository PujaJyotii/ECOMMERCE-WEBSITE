import { Button, Card, Form } from "react-bootstrap"
import classes from './LogInInformation.module.css'
import { useRef, useState } from "react";
import { useContext } from "react";
import AuthContext from "../Store/auth-context";
import { useHistory } from "react-router-dom";


const LoginInformation = () => {
  const enteredEmailRef=useRef();
  const enteredPasswordRef=useRef();

const history = useHistory()

const authCtx = useContext(AuthContext)

    const [isLogin, setIsLogin] = useState(true);
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };

      const SubmitHandler =(event) => {
        event.preventDefault();

        const enteredEmail=enteredEmailRef.current.value;
        const enteredPassword= enteredPasswordRef.current.value;

    let url;
        if(isLogin)
        {
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEed_BOyitM68AAqa5txi48n_44kUbDaQ'
        }
        else{
          url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEed_BOyitM68AAqa5txi48n_44kUbDaQ'
        }
        fetch(url,{
          method:'POST',
          body:JSON.stringify({email:enteredEmail,
          password:enteredPassword,
          returnSecureToken:'true'}),
          headers:{'Content-Type': 'application/json'
        }
          
        }).then(res => {
          if(res.ok){
             return res.json()
          }
          else{
            return res.json().then((data) => {
              let errMessage='Authentication Failed';
              if(data && data.error && data.error.message)
              {
                errMessage=data.error.message
              }
              throw new Error(errMessage)
            })
          }
        }).then((data) => {
          authCtx.login(data.idToken)
          history.replace('/store')
        }).catch((err) => {
          alert(err.message)
        })

      }


    return (
        <>
        <div className={classes.header}>
    <h1 className={classes['header-text']}>The Generic</h1>
  </div>
        <div className="d-flex justify-content-center align-items-center h-100">
        <Card border="primary" style={{ width: '25rem'}} className="mb-4 mt-4" >
            <Card.Body>
            
            <Form onSubmit={SubmitHandler}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={enteredEmailRef}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" minLength='7'  placeholder="Password" ref={enteredPasswordRef}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" className="mb-2">
      {isLogin ? 'Login' : 'Create Account'}
      </Button><br></br>
      <Button
    
    variant="primary"
      onClick={switchAuthModeHandler}>
        {isLogin ? 'Create new account' : 'Login with existing account'}
        </Button> 
    </Form>
            </Card.Body>
        </Card>
        </div>
        </>
    )
}

export default LoginInformation