import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap'

 class Bootstrap extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          show:'false'
       }
     }
     
     eve()
     {
         this.setState({show:!this.state.show})
     }
  render() {
    return (
      <div>
        <Button onClick={()=>this.eve()}>click</Button>
        <Modal show={this.state.show}>
<Modal.Header>Modal Heading</Modal.Header>
<Modal.Body>My name is suyash chilwarwar</Modal.Body>
<Modal.Footer>
    <Button onClick={()=>this.eve()}>close</Button>
    <Button onClick={()=>this.eve()}>save</Button>
</Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Bootstrap
