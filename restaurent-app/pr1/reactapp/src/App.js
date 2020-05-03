

import React, {Component} from 'react'

//import logo from './logo.svg';
import './App.css';
import Greet  from './component/Greet';
import Welcome from './component/welcome';
import Const from './component/hello'
import Message from './component/Messsage'
import Counter from './component/counter'
import FunctionClick from './component/FunctionClick'
import EventBind from './component/EventBind';

import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Inline from './component/inline';
import Form  from './component/FormLayout'
import ComponentDidMount from './component/ComponentDidMount';
import ComponentDidUpdate from './component/ComponentDidUpdate';
import ComponentWillUnmount from './component/CompountWillUnmount';
import FormValidation from './component/FormValidation'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Refff from './component/Ref'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from './component/Bootstrap'
import {Button} from 'react-bootstrap'
class App extends Component{


  render()
  {return(
    <div className='App'>
     <Bootstrap/>
     {/*  <Refff/> */}
     {/*  <Router>
        <Link to="">Home</Link>
        <Link to="/Message">Message</Link>
        <Link to="/NameList">NameList</Link>

        <Route exact path="/" component={FormValidation}/>
        <Route path="/Message" component={Message}/>
        <Route path="/NameList" component={NameList}/>
       <FormValidation/>
<Message/>
<NameList/> 
      </Router> */}


{/* // for componentwillunmount */}


   {/* constructor(props) {
    super(props)
  
    this.state = {
       toggle:true
    }
  }  */}

{/* 

{this.state.toggle?
      <ComponentWillUnmount/>:null


}

      <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete</button> */}
{/*    <ComponentDidUpdate/>
 */}   {/* <ComponentDidMount/> */}
    {/*  <Form/> */}
   
   
   
   {/* <NameList/> */}
   {/* <Message/> */}
   {/* <Inline/> */}
    {/*
      <UserGreeting/>
       <ParentComponent/>
     <EventBind/>
    <FunctionClick/>
    
      <Counter />
      <Greet  name="suyash" hero="batman"> <p> this is a child class</p></Greet>
      <Greet name="santosh" hero="superman">
        <button >Action
        </button>
      </Greet>
      <Greet name="suvarna" hero="wonder women"/>

     <Welcome name="suvarna" hero="wonder women"/>*/}
      {/*<Const/>*/}
    </div>
  );
  }
}

export default App;
