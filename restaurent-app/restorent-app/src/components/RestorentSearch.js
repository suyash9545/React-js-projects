import React, { Component } from 'react'
import Navebar from './Navebar'


class RestorentSearch extends Component {
  constructor() {
    super()

    this.state = {
      searchData: null,nodata:false,
    
    }
  }

  search(key) {
    /*      console.log(key)
    
     */
    fetch('http://localhost:3000/restaurent?q=' + key).then((data) => {
      data.json().then((resp) => {
        console.log(resp)
        if(resp.length>0)
        {
          this.setState({ searchData:resp,nodata:false })

        }else{
          this.setState({ nodata:true ,searchData:null})


        }
      })
    }
    )



  }
  render() {
    return (
      <div>
         <Navebar/>
        <h1>Restorent Search</h1>
        <input type="text" onChange={(event) => this.search(event.target.value)} />
        <div>
          {
            this.state.searchData?
              <div>
                {
                  this.state.searchData.map((item) =>
                    <div>{item.name} </div>)
                }
              </div>
              :""

          }
          {
            this.state.nodata?<h3>NO Data Found</h3>:null
          }

        </div>
      </div>
    )
  }
}

export default RestorentSearch
