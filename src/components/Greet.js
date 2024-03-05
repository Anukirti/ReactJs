import React from 'react';

// function Greet(){
//     return <h1> Hello Annu </h1>
// }

// const Greet = (props) => {
//     console.log(props);
//     return(
//     <div>
//         <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//         {props.children}
//     </div>    
    
//     )
// }

// Using Destructureing 

const Greet = (props) => {
    // we can destructure here as wll insted in function declaration
    // const {name, heroName} = props
    return(
    <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
    </div>    
    
    )
}
export default Greet;

