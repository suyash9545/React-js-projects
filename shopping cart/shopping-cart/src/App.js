import React from 'react';
import './App.css';
import Product from './components/product'
import Cart from './components/cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
 <img src={process.env.PUBLIC_URL+"logo192.png"} />


<Product/>
<Cart/>

      
    </div>
  );
}

export default App;
