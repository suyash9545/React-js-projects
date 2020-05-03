import React, { Component } from 'react'

 class info extends Component {
    constructor() {
        super();
    
        this.state = {
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          summary:'',
          hobbie:'',
          ten:'',
          twelve:'',
          collage:'',
          skill:'',


          
        }
      }
      create() {

        fetch('http://localhost:3000/resume',{
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
        
  <label>Name : </label>      <input type="text"  placeholder="name" onChange={(e)=>{this.setState({name:e.target.value  })}} /><br></br>
  <label>Email : </label>      <input type="text" placeholder="email" onChange={(e)=>this.setState({email:e.target.value})} /><br></br>
  <label>Phone -Number : </label>      <input type="text" placeholder="phone" onChange={(e)=>this.setState({phone:e.target.value})} /><br></br>
  <label>Address : </label>      <input type="text" placeholder="address" onChange={(e)=>this.setState({address:e.target.value})} /><br></br>
  <label>City : </label>      <input type="text"  placeholder="city" onChange={(e)=>this.setState({city:e.target.value})} /><br></br>
  <label>State : </label>      <input type="text" placeholder="state" onChange={(e)=>this.setState({state:e.target.value})} /><br></br>
  <label>Summary : </label>      <input type="text" placeholder="summary" onChange={(e)=>this.setState({summary:e.target.value})} /><br></br>

  <label>Hobbies and intrest : </label>      <input type="text" placeholder="hobbie" onChange={(e)=>this.setState({hobbie:e.target.value})} /><br></br>
  <label>10th school name : </label>      <input type="text" placeholder="school" onChange={(e)=>this.setState({ten:e.target.value})} /><br></br>
  <label>12th school name : </label>      <input type="text" placeholder="collage" onChange={(e)=>this.setState({twelve:e.target.value})} /><br></br>
  <label>collage name(BE,MBA,....etc) : </label>      <input type="text" placeholder="collage" onChange={(e)=>this.setState({collage:e.target.value})} /><br></br>
  <label>Skills : </label>      <input type="text" placeholder="skills" onChange={(e)=>this.setState({skill:e.target.value})} /><br></br>




  <button onClick={() => {this.create()}}>CREATE</button>

      </div>
    )
  }
}

export default info
