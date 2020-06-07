import React from 'react';
import Person from './Person'
function NameList(){
  const  persons = [
  {
    id: 1,
    name: 'A',
    age: 23,
    skill: "React"
  },
  {
    id: 2,
    name: 'A',
    age: 25,
    skill: "ReactJs"
  },
  {
    id: 3,
    name: 'C',
    age: 12,
    skill: "JS"
  }
  ]
  const personList = persons.map(person => <Person key={person.id} person={person}/>)

  return (
    <div>
    {personList}
    </div>
  )
}


export default NameList
