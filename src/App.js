import './App.css';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import signUp from './signup';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
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
      <h1 className="Header">Sign In</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button style={{backgroundColor:"red", borderRadius:"7px"}}> Sign In </Button>
      <Button style={{backgroundColor:"red", borderRadius:"7px"}}> Login as Guest User </Button>
      </form>
      <div className="footer">
        <label style={{color:"grey"}}>New To MovieBox?</label> 
        <Router>
            <Routes>
              <Route exact path="/signup" component={signUp}/>
            </Routes>          
        </Router>
        <a href='./signUp'>
        <button style={{color:"White", marginLeft:"10px", background:"transparent", border:"none"}}>SignUp Now</button>
        </a>
      </div>
      
    </div>
    </div>
  );
}

export default App;
