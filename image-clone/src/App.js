import React, { useState } from 'react';
import './App.css';
import {Helmet} from "react-helmet";


function App() {
  const [value, setvalue] = useState("")
  const [results, setResults] = useState([])


  //-4iT0DpHYZqZB3_GqvHAkIlUTsEXn2pUmCH6Ayk4hxE

  const fetchdata = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=-4iT0DpHYZqZB3_GqvHAkIlUTsEXn2pUmCH6Ayk4hxE&query=${value} &orientation=squarish`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        setResults(data.results)
      })
  }
  return (
    
    <div className="App">
      <Helmet>
                <title>search-Image</title>

            </Helmet>
      <div className="mydiv" >
        <span>Search</span>
        <input className="inp" style={{ width: "60%" }} type="text" value={value} onChange={(e) => setvalue(e.target.value)} />
        <button className="inp" onClick={() => fetchdata()}><b>SEND</b></button>
      </div>
      <div className="image">
        {
          results.map((item)=>{
            return  <img key={item.id} className="item" src={item.urls.regular} />

          })
        }
      </div>
    </div>
  );
}

export default App;
