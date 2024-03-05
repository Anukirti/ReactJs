import React from 'react'
import Person from './Person';

function ListRendering() {

    const names = ['Bruce', 'Clark', 'Diana', 'Clark']
    const nameList = names.map((name, index) => <h2 key={index}>{index} -  {name}</h2>)

    // const persons =[
    //     { id: 1, name:'Bruce', age: 25, skill: 'Angular' },
    //     { id: 2, name:'Clark', age: 26, skill: 'React' },
    //     { id: 3, name:'Diana', age: 29, skill: 'VueJs' },
    // ];

    // const personList = persons.map(person => <Person key={person.id} person = {person}></Person>)
    
    return (
        <div>
        {nameList}
        {/* {personList} */}
        </div>
    )
}

export default ListRendering
