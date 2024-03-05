import React, {Component } from 'react'

// function FunctionClick(){
//     function clickHandler(){
//         console.log('Button clicked')
//     }    
    
//     return(
//         <div>
//             <button onClick={clickHandler}>Click</button>
//             {/* here we don't have to use ()  for function it will call as soon as initiallised even if button is not clciked 
//             and will not work on click*/}
//         </div>
//     )
// }


class classClick extends Component{
    clickHandler(){
                console.log('Button clicked')
            } 
    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
            
        )
    }
}

export default classClick;

// export default FunctionClick