import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Navebar from './Navebar'



class RestorentUpdate extends Component {
  constructor() {
    super();

    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null,
    }
  }


  componentDidMount() {

    fetch(`http://localhost:3000/restaurent/${this.props.match.params.id}`).then((response) => {
      response.json().then((result) => {
/*         console.log(result)
 */        this.setState({
          name: result.name,
          email: result.email,
          rating: result.rating,
          address: result.address
        })

      })


    })
  }

  Update() {
    fetch('http://localhost:3000/restaurent/'+this.state.id, {
      method: "PUT",
      mode: 'cors',
      headers: {
        
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result) => {
      result.json().then((resp) => {
/*         console.log(resp)
 */
        alert("DATA UPDATED")
      })
    })
  }
  render() {
/*     console.log(this.state)
 */    return (
      <div>
         <Navebar/>
        <h1>Restorent Updates</h1>

        <input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} placeholder=
          "restorent name" /><br /><br />
        <input type="text" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} placeholder=
          "restorent Email" /><br /><br />
        <input type="text" value={this.state.rating} onChange={(event) => this.setState({ rating: event.target.value })} placeholder=
          "restorent Rating" /><br /><br />
        <input type="text" value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })} placeholder=
          "restorent Address" /><br /><br />
        <Button onClick={() => this.Update()}>UPDATE</Button>



      </div>
    )
  }
}

export default RestorentUpdate
