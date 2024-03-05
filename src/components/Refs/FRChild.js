import React from 'react'

// function FRChild() {
//   return (
//     <div>
//       <input type='text' ></input>
//     </div>
//   )
// }

const FRChild = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} ></input>
        </div>
    )
}) 


export default FRChild
