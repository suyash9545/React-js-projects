import React from 'react'

 const hello = () =>
 {
    // return (
     //    <div className='suaysh'>         ////with JSX
    //         <h1>suyash</h1>
     //    </div>
     //)

     return React.createElement('div',{className :'ss'},React.createElement('h1',null,"suyash"))//without JSX
 }



 export default hello;