import React from 'react'

//function Greet(){
//return <h1>Hello suyash</h1>
//}



//name expport
 const Greet = props =>{ 
     console.log(props)

return(
    <div>
<h1>hello {props.name} {props.hero}</h1> 
{props.children}
</div>

)
}


export default Greet;  //functional export