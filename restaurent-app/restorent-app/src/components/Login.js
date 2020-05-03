import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Navebar from './Navebar'


 class Login extends Component {
     constructor() {
       super();
     
       this.state = {
           name:'',
           email:'',
           dob:'',
           username:'', password:'',

          
       }
     }
     login()
     {
        fetch('http://localhost:3000/signup?q=' + this.state.name).then((data) => {
            data.json().then((resp) => {
              console.log(resp)
              localStorage.setItem('login',JSON.stringify(resp))

              console.log("resp" , resp)
              if(resp.length>0)
              {
                  console.log(this.props.history.push('RestorentList'))///login hone k badh ye konse page pe ja raha hai usta url

              }
             else{
                 alert("please check the username and password")
             }
            })
          }
          )
      
     }
     
  render() {
    return (
      <div>
                

         <Navebar/>
          <h1 className="heading">Login Form</h1>
<b>Username :</b>  <input type="text" className="login-wrapper" placeholder="Entet Name" onChange={(event)=>this.setState({name:event.target.value})}></input><br/><br/>
            <b>Password :</b>    <input type="password" className="login-wrapper" placeholder="Enter Password" onChange={(event)=>this.setState({password:event.target.value})}></input><br/><br/>
                <Button onClick={()=>this.login()}>LOGIN</Button>

      </div>
    )
  }
}

export default Login
