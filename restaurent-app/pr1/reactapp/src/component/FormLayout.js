import React, { Component } from 'react'

const comment ={
    padding:10
}

 class FormLayout extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          username:'',
          text:'',
          topic:'React'
       }
     }
     OnHandlerChange= (event)=>{
         this.setState({
          username:  event.target.value
         })
     }
     TextHandlerChange=(event)=>{
         this.setState({
           text:  event.target.value

         })
     }
     xyz=(event)=>{
         this.setState({
                topic:event.target.value
         })
     }
     su=()=>
     {
         alert(`${this.state.username} ${this.state.text} ${this.state.topic}`)
     }

 
  render() {
    return (
        <form onSubmit={this.su}>
             <div>
               <label>username : </label>
               <input type="text" value={this.state.username} onChange={this.OnHandlerChange}></input>
        <div style={comment}>
        <label>Comment : </label>
        <textarea value={this.text} onChange={this.TextHandlerChange}></textarea>
        </div>
        <label>Choose : </label>
        <select onChange={this.xyz}>
            <option value={this.topic}>React</option>
            <option value={this.topic}>suyash</option>
            <option value={this.topic}>Santosh</option>
            <option value={this.topic}>Suvarna</option>
        </select>
        
        </div>
        <button > submit</button>
        </form>
     
    )
  }
}

export default FormLayout
