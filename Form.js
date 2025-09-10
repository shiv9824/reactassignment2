import React, { useState } from 'react'

function Form() {

  const [name,setName] = useState('')
 const [email,setEmail] = useState('') 
  const [password,setPassword] = useState('')
  
 

 const Onsubmit = (e)=>{
    e.prevenDefault()
  
 }
  

 
  return (
    <div>
       <form onSubmit={Onsubmit} >
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

          <Display name={name} email={email} password={password}></Display>
    </div>
  )
}

export default Form



function Display({name,email,password}){
return(
    <>
       <h1>{name}</h1> 
        <h1>{email}</h1>    
         <h1>{password}</h1>       
    </>
)}