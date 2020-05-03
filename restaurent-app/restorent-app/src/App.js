import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import RestorentList from './components/RestorentList'
import RestorentSearch from './components/RestorentSearch'
import RestorentUpdate from './components/RestorentUpdate'
import RestorentDetails from './components/RestorentDetails'
import RestorentCreate from './components/RestorentCreate'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faList,faPlus,faSearch,faUser } from '@fortawesome/free-solid-svg-icons'
import Login from './components/Login'
import Signup from './components/Signup'


import Logout from './components/Logout'






function App() {
  return (
    <div className="App">
     
    
      <Router>
    
      
        <Route path="/RestorentList">
       < RestorentList/>
        </Route>
        <Route path="/Signup">
       < Signup/>
        </Route>
        <Route path="/Logout">
       < Logout/>
        </Route>
        <Route path="/RestorentCreate">
       < RestorentCreate/>
        </Route>
        <Route path="/RestorentSearch">
       < RestorentSearch/>
        </Route>
        <Route path="/RestorentDetails">
       < RestorentDetails/>
        </Route>
        <Route path="/RestorentUpdate/:id"
        render={props=>(
          < RestorentUpdate  {...props}/>
        )
        }>
        </Route>
        <Route path="/Login"
        render={props=>(
          < Login  {...props}/>
        )
        }>
        </Route>
        <Route exact path="/">
       < Home/>
        </Route>

      </Router>
      
    </div>
  );
}

export default App;
