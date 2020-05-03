import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'react-bootstrap';


 class product extends Component {
    constructor() {
        super();
    
        this.state = {
         
          product:'',
          prise:''
          
        }
      }

cart()
{

    fetch('http://localhost:3000/cart',{
      method:"POST",
      mode: 'cors',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result) => {
      result.json().then((resp) => {
   
        
        alert("DATA UPDATED")
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Product Area</h1>


        <Container>
 
  <Row>
    <Col>
    
    <img src={process.env.PUBLIC_URL+"/image/product-1.jpg"} width="200px" />
    <h3 onChange={this.stf}>{this.state.abc} </h3>
    <h6>₹30.00/kg </h6>
    <Button  onClick={()=>this.cart()} >ADD CART</Button>
    
    
    
     </Col>
    <Col><img src={process.env.PUBLIC_URL+"/image/product-2.jpg"} width="200px" />
    <h3 >Tomato</h3>
    <h6>₹30.00/kg</h6>

    <Button onClick={()=>this.cart()}>ADD CART</Button>
    </Col>
    <Col><img src={process.env.PUBLIC_URL+"/image/product-3.jpg"} width="200px" />
    <h3 >Brocolli</h3>
    <h6>₹30.00/kg</h6>

    <Button onClick={()=>this.cart()}>ADD CART</Button>
    </Col>
  </Row>
</Container>
      </div>
    )
  }
}

export default product
