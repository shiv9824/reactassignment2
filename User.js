import React from 'react'

function User() {
      const users = [
    { id: 1, name: "Shiv" },
    { id: 2, name: "Arun" },
    { id: 3, name: "het" },
    { id: 4, name: "preet" },
  ];

  return (
    <div>
        <h1>user</h1>
        <ul>
            {users.map((v,i)=>{
             return   <li key={v.id}>
                    {v.id} - {v.name}
                </li>
            })}
        </ul>
    </div>
  )
}

export default User