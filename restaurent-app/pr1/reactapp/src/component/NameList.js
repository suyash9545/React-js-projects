import React from 'react'

function NameList() {
    const names=['suyash','santosh','suvarna','suyash']

  return (
    <div>
       {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
  <h2>{names[2]}</h2> */}
      
      {
          names.map((name,index) => <h2 key ={index}>{index} {name}</h2>)
      }
    </div>
  )
}

export default NameList

///for same name twice we can use a key which has a index attribute in it to remove any error in the console
//index has 3 problems
//The items in your list doesnot have a unique id
//the list is a static list and will not change 
//ths list will never be recorded or filtered