import React from 'react';

function Person({person}){

  return (
    <div>
      <h1>{person.name}+ {person.age} + {person.skill}</h1>
    </div>
  )
}


export default Person
