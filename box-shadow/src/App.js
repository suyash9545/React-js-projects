import React,{useState} from 'react';
import './App.css';


function App() {

  const [Width,setWidth] = useState(10)
  const [Widt,setWidt] = useState(10)

    const [Color,setColor] = useState("black")

  /* const [Hori,setHori] = useState(10)
  const [Veri,setVeri] = useState(10)
  const [Blur,setBlur] = useState(10)
  const [Color,setColor] = useState("black") */

  return (

   
    <div className="App">

<div>
         <div className="controls">
      <label>width</label>
      <input type="range"  min="0" max="200" value={Width} onChange={(e)=>setWidth(e.target.value)} />
      <input type="range"  min="0" max="200" value={Widt} onChange={(e)=>setWidt(e.target.value)} />

      <input type="color"  value={Color} onChange={(e)=>setColor(e.target.value)} />

      </div>
      <div>
        <div className="box" style={{border:`${Width}px solid ${Color}`} } ></div>
      </div>
     
    </div>
     
     {/*  <div className="controls">
      <label>Horizontal Length</label>
      <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
      <label>Vertical Length</label>

      <input type="range"  min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
      <label>Blur Effect  </label>

      <input type="range"  min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
      <label>Color</label>

<input type="color"  value={Color} onChange={(e)=>setColor(e.target.value)} />
      </div>
      <div className="output">
        <div className="box" style={{boxShadow:`${Hori}px ${Veri}px ${Blur}px ${Color}`}}>
            <p>Box-Shadow:{Hori}px {Veri}px {Blur}px {Color}</p>

        </div>
      </div>
       */}
    </div>
  );
}

export default App;
