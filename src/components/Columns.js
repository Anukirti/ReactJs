import React from 'react'

function Columns() {
    const items =[]
  return (
    <React.Fragment>
        {/* When you have a Key to be passed in Fragment */}
        {/* {
            items.map(item =>(
                <React.Fragment key = {item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>    
            ))
        } */}
      <td>Name</td>
      <td>Anu</td>
    </React.Fragment>
    // In case we don't have any key to be passed using empty <> is also okay.
    // <>
    //  <td>Name</td>
    //   <td>Anu</td>
    // </>

  )
}

export default Columns
