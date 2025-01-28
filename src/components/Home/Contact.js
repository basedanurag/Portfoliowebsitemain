
import {React, useState}from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 



export default function Constant() {

  const [name, setName] = useState('');

  return(
  <div style={{ display: 'block',  
                  width: 700,  
                  padding: 30 }}> 
                  <input type='text' value={name} onChange={(e) => setName(e.target.value)}/> 
      <h4>React-Bootstrap Form Component</h4> 
      <Form> 
      <Form.Group> 
          <Form.Label>Enter your full name:</Form.Label> 
          <Form.Control type="text" 
                        value={name} onChange={(e) => setName(e.target.value)}/> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Enter your email address:</Form.Label> 
          <Form.Control type="email" 
                        placeholder="Enter your your email address" /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Enter your age:</Form.Label> 
          <Form.Control type="number" placeholder="Enter your age" /> 
        </Form.Group> 
        <Button variant="primary" type="submit"> 
           Click here to submit form 
        </Button> 
      </Form> 
    </div> 
  );
}
