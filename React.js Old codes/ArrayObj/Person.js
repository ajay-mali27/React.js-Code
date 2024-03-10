import React from 'react'

function Person() {
    const person=[{
        id:27,
        name:'Ajay',
        age:21,
        course:'MSCIT'
    }]
    
   const personList=person.map(ajay=>(
    <h3>{person.name}</h3>
   ))
  return (
    <>
  
    </>
  )
}

export default Person