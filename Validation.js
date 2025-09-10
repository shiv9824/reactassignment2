import React, { useState } from 'react'


function Validation() {
      const [name,setName] = useState('')
     const [email,setEmail] = useState('') 
      const [password,setPassword] = useState('')
  return (
    <div>
          <form >
        <input name="name" placeholder="Name" onChange={(e)=>{
                 setName(e.target.value)
        }} /> <br />
        <input name="email" type="email" placeholder="Email" onChange={(e)=>{
               setEmail(e.target.value)
        }} /> <br />
        <input name="password" type="password" placeholder="Password" onChange={(e)=>{
            setPassword(e.target.value)
        }} /> <br />
        <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default Validation