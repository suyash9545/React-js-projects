import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('child')}>greet</button>
      
    </div>
  )
}

export default ChildComponent
