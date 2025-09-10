import React from 'react'

function Listitem() {

    const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
  return (
    <div>

 <h2>Fruit List</h2>
      <ul>
        {fruits.map((value, index) => {
         return <li key={index}>{value}</li>
     } )}
      </ul>
    </div>                
  )
}

export default Listitem