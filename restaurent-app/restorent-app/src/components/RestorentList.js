import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Navebar from './Navebar'


class RestorentList extends Component {
  constructor() {
    super();

    this.state = {
      list: null,


    };
  }
  componentDidMount() {


    this.getData()
  }

  getData() {
    const apiurl = 'http://localhost:3000/restaurent';
    fetch(apiurl).then(response => response.json()).then((result) => {
      this.setState({ list: result })

    })



  }
  Delete(id) {
    fetch('http://localhost:3000/restaurent/' + id, {
      method: "DELETE",
      mode: 'cors',
      /*  headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }, */
      body: JSON.stringify(this.state)
    }).then((result) => {
      result.json().then((resp) => {

        alert("DATA DELETED")
        this.getData()
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
         <Navebar/>
        <h1>Restorent List</h1>
        {
          this.state.list ?
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th> Name</th>
                    <th>Email </th>
                    <th>Rating</th>
                    <th>Location  </th>
                    <th>Edit/Delete </th>
                  </tr>
                </thead>
                <tbody>

                  {
                    this.state.list.map((item, i) =>
                      // <div className="list-wrapper">
                      //   <span></span>
                      //   <span> {item.email}</span>

                      //   <span></span>

                      //   <span> {item.address}</span>

                      // </div>

                      <tr>
                        <td>{item.id}</td>
                        <td> {item.name}</td>
                        <td>{item.email}</td>
                        <td> {item.rating}</td>
                        <td> {item.address}</td>
                        <td><Link to={"/RestorentUpdate/" + item.id}><FontAwesomeIcon icon={faEdit} /></Link>&nbsp;&nbsp;
                   <span onClick={() => this.Delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                      </tr>



                    )
                  }
                </tbody>

              </Table>
            </div>

            : <p>Plzzzz wait</p>


        }
      </div>

    );
  }
}

export default RestorentList
