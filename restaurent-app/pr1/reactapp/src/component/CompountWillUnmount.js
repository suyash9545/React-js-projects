import React, { Component } from 'react'

 class CompountWillUnmount extends Component {

    componentWillUnmount()
    {
        alert('component deleted')
    }
  render() {
    return (
      <div>
        suyash chilwarwar

        <ul>
            <li>name:suyash</li>
            <li>Email:chilwarwarsuyash2@gmail.com</li>
            <li>Contact:9545990489</li>
        </ul>
      </div>
    )
  }
}

export default CompountWillUnmount
