import React, { Component } from 'react'
 class Ref extends Component {
     constructor() {
       super()
     
     
       this. userRef=React.createRef();
       
     }

     editval()
     {
            //console.log(this.userRef)

            //this.userRef.current.focus()
            this.userRef.current.value="suyash"
     }
     
  render() {
    return (
      <div>
        <input ref={this.userRef} type='text' name="user"></input>
        <button onClick={()=>this.editval()}>click</button>
      </div>
    )
  }
}

export default Ref
