import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Nav,Navbar} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faList,faPlus,faSearch,faUser,faUserPlus } from '@fortawesome/free-solid-svg-icons'

 class Navebar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Resto-WEB</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to=""><FontAwesomeIcon icon={faHome}/> Home</Link></Nav.Link>
      

      
      {
          localStorage.getItem('login')?
          
""          
          :
<Nav.Link href="#home"><Link to="/Signup"><FontAwesomeIcon icon={faUserPlus}/> Sign Up</Link></Nav.Link>
          
      }

      {
          localStorage.getItem('login')?
          
          <Nav.Link href="#link"><Link to="/RestorentList"><FontAwesomeIcon icon={faList}/> List</Link></Nav.Link>
          
          :
""
          
      }
         {
          localStorage.getItem('login')?
          
          <Nav.Link href="#link"><Link to="/RestorentCreate"><FontAwesomeIcon icon={faPlus}/> Create</Link></Nav.Link>
          
          :
""
          
      }
      {
          localStorage.getItem('login')?
          
          <Nav.Link href="#link"><Link to="/RestorentSearch"><FontAwesomeIcon icon={faSearch}/> Search</Link></Nav.Link>
          
          :
""
          
      }



      {
          localStorage.getItem('login')?
          
            <Nav.Link href="#link"><Link to="logout"><FontAwesomeIcon icon={faUser}/> Logout</Link></Nav.Link>

          
          :
            <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser}/> Login</Link></Nav.Link>

          
      }
      

     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}

export default Navebar
