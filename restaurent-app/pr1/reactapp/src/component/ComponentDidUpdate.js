import React, { Component } from 'react'

 class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       active:null,
       who:null
    }
  }
  componentDidUpdate()
  {
      console.log('componentDidUpdate')
      if(this.state.who==null)  //add the condition to prevent infinite looping if not added then infinite looping accurss
      this.setState({who:"anil"})
  }
  
    render() {
    return (
      <div>
          <h1>suyash{this.state.who}</h1>
        <button onClick={()=>this.setState({active:"yes"})}>Activate</button>
      </div>
    )
  }
}

export default ComponentDidUpdate
