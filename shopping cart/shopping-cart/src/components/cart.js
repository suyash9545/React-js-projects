import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

 class cart extends Component {
 
     constructor() {
       super();
     
       this.state = {
           Dart:null,
           id:null
         

          
       }
     }

     componentDidMount(){
        const apiurl = `http://localhost:3000/cart/`;
        fetch(apiurl).then(response => response.json()).then((result) => {
            console.log(result)
          this.setState({ Dart: result })
    
        })
     }
     
  render() {
    return (
      <div>
        <h1>My Cart</h1>
        {
            this.state.Dart ?
            <div>
                 <Table striped bordered hover>
                 <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th> Product </th>
                      <th>quantity </th>
                      <th>prise</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                {
                   
                    this.state.Dart.map((item,i)=>
                 /*    <div>
{item.product}
                      
                    </div>  */
                   <tr>
                        <td>{item.id}</td>
                        <td>{item.product}</td>
<input type="number" value="1"/>
                        <td>{item.prise}</td>
                    </tr> 
                    
                    )
                }
                </tbody>
</Table>

            </div>
            :<p>plzzzzz wait</p>
        }
      </div>
    );
  }
}

export default cart
