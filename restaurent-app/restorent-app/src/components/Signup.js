import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Navebar from './Navebar'

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      name: null,
      email: null,
      DOB: null,
      username: null,
      password:null
      
    }
  }

    signup()
    {
       
      
    fetch('http://localhost:3000/signup',{
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
          console.log(this.probs)

        })
      })
    }
     
    
    
    render() {
        return (
            <div>
                <Navebar />
                <h1 className="heading">Sign Up</h1>
              <form>
                <b>Name :</b>  <input type="text" className="login-wrapper" placeholder="Entet Username" onChange={(event) => this.setState({ name: event.target.value })}></input><br /><br />

                <b>Email :</b>  <input type="text" className="login-wrapper" placeholder="Entet Username" onChange={(event) => this.setState({ email: event.target.value })}></input><br /><br />

                <b>Date of birth :</b>  <input type="text" className="login-wrapper" placeholder="Entet Username" onChange={(event) => this.setState({ dob: event.target.value })}></input><br /><br />

                <b>Username :</b>  <input type="text" className="login-wrapper" placeholder="Entet Username" onChange={(event) => this.setState({ username: event.target.value })}></input><br /><br />
               
                <b>Password :</b>    <input type="password" className="login-wrapper" placeholder="Enter Password" onChange={(event) => this.setState({ password: event.target.value })}></input><br /><br />
               
                </form> <Button onClick={() => this.signup()}>SIGN UP</Button>

            </div>
        )
    }
}

export default Signup
