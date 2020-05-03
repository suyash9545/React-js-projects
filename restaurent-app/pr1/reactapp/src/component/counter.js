import React, { Component } from 'react'

 class counter extends Component {
     constructor()
     {
         super()
         this.state={
             count:0
         }
     }
     counter(){
    // {
      //   this.setState({
        //     count :this.state.count +1
         //  })
        
     //  }


     this.setState(prevState =>({
         count:prevState.count+1
     }))
    }
     incrementfive(){
this.counter()
this.counter()
this.counter()
this.counter()
this.counter()
     }
  render() {
    return (
      <div>
        count - {this.state.count}
        <button onClick={()=> this.incrementfive()}>counter</button>
      </div>
    )
  }
}

export default counter
