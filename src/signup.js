import './App.css';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

function signUp() {
  const Button = styled.button`
    background-color: black;
    color: white;
    width: 100%;
    font-size: 20px;
    padding: 10px 0px;
    border: 0;
    border-radius: 15px;
    margin-top: 10px;

    cursor: pointer;
  `;
  return (
    <div className="containerr">
      
      <div className='box'>

      <form>
      <h1 className="Header">Sign Up</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button style={{backgroundColor:"red", borderRadius:"7px"}}> Sign Up </Button>
      <Button style={{backgroundColor:"red", borderRadius:"7px"}}> Login as Guest User </Button>
      </form>
      <div className="footer">
        New To movie App? <a href="google.com" style={{color:"White", marginLeft:"10px"}}>Sign In</a>
      </div>
    </div>
    </div>
  );
}

export default signUp;
