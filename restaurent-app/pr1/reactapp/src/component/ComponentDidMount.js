import React, { Component } from 'react'

 class ComponentDidMount extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          data:null
       }
       console.log('constructor')
     }
     
     componentDidMount()
     {

        this.setState({data:'updated'})
         console.log('componentDidMount')
     }
  render() {
      console.log('render')
    return (
      <div>
        <h1>render</h1>
      </div>
    )
  }
}

export default ComponentDidMount
