import React,{useState} from 'react'

function border() {
    const [Width,setWidth] = useState(10)
    const [Color,setColor] = useState("black")

  return (
    <div>
         <div className="controls">
      <label>width</label>
      <input type="range"  min="0" max="200" value={Width} onChange={(e)=>setWidth(e.target.value)} />
      <input type="color"  value={Color} onChange={(e)=>setColor(e.target.value)} />

      </div>
    </div>
  )
}

export default border
