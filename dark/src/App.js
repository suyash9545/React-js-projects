import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const [dark,setmode] = useState(false)
    
  let getMode = ()=>{
    return JSON.parse(localStorage.getItem("mode")) || 
    
    
    false
  }

  useEffect(() => {
    localStorage.setItem("mode",JSON.stringify(dark))
  
  }, [dark])
  return (
    <div className={dark ? "App dark-mode": "App"}>
     <div className="nav">
     <label class="switch">
  <input type="checkbox" checked={dark}
  onChange={()=>setmode(!dark)}
  />
  <span class="slider round"></span>
</label>
     </div>

     <div className="contents">
  <h1>{dark? "Dark mode is on" : "Light mode is on"}</h1>
       <p style={{fontSize:"20px"}}>Want to see magic then click the toggle button</p>
        </div>
    </div>
  );
}

export default App;
