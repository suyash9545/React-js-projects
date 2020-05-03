import React, { Component } from 'react'
import Navebar from './Navebar'

import { Button } from 'react-bootstrap'


class RestorentCreate extends Component {
  constructor() {
    super();

    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null,
      
    }
  }


  create() {

    fetch('http://localhost:3000/restaurent',{
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
      <div >
         <Navebar/>
        <h1 className="heading">Restorent Create</h1>
      <b>Restaurent Name : </b>  <input className="create" onChange={(event) => {this.setState({ name: event.target.value })}} placeholder=
          " Name" /><br /><br />
     <b>Restaurent Email : </b>    <input className="create" onChange={(event) => {this.setState({ email: event.target.value })}} placeholder=
          " Email" /><br /><br />
      <b>Restaurent Rating : </b>   <input className="create" onChange={(event) => {this.setState({ rating: event.target.value })}} placeholder=
          " Rating" /><br /><br />
       <b>Restaurent Location : </b>  <input className="create"  onChange={(event) => {this.setState({ address: event.target.value })}} placeholder=
          " Address" /><br /><br />
        <Button onClick={() => {this.create()}}>CREATE</Button>

      </div>
    )
  }
}

export default RestorentCreate
