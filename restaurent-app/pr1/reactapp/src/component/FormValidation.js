import React, { Component } from 'react'


class FoemValidation extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'',
       password:'',
       nameeror:'',
       passerror:''
    }
  }
  valid()
  {
 
    if(!this.state.name.includes("@") && this.state.password.length<5)
    {
      this.setState({nameeror:"invalid input" ,passerror:"password invalid"})
    }
   else if(!this.state.name.includes("@"))
    {
      this.setState({nameeror:"invalid input" })
    }
    else if( this.state.password.length<5)
    {
      this.setState({passerror:"password invalid"})
    }else{
      return true
    }
  }
  

  submit()
  {
    if(this.valid())
    {
      alert('form is submitted')
    }
  }

  render() {
    return (
      <div>
        <h1>FORM VALIDATION</h1>
      <label>Username / Email : </label>
        <input type='text' placeholder="email/name" onChange={(event)=>{this.setState({ name:event.target.value })}}></input>
        <p style={{color:"red"}}>{this.state.nameeror}</p>
        <label>Password : </label>

      
        <input placeholder="password" type='password' onChange={(event)=>{this.setState({ password:event.target.value})}}></input>
        <p style={{color:"red"}}> {this.state.passerror}</p>
<button onClick={()=>{this.submit()}}>Submit</button>

        
      </div>
    )
  }
}

export default FoemValidation
