import React, { Component } from 'react'

 class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  
    render() {

        // Approch 1 
        // if(this.state.isLoggedIn){
        //     return <div>Welcome to conditional rendering</div>
        // }else {
        //     return <div>Welcome guest</div>
        // }

         //approch 2 using variable to store element
        //  let message 
        //  if(this.state.isLoggedIn){
        //      message = <div>Welcome Annu</div>
        //  }else {
        //      message = <div>Welcome Guest</div>
        //  }
        //  return <div>{message}</div>

        // Approch 3 using ternary conditional operator

        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Annu</div> : 
        //     <div>Welcome Guest</div>
        // )

        // Approch 4 Using Short curcuit Operator it will show if condition is valid else show nothing.
      return this.state.isLoggedIn && <div>Welcome Annu</div>

 
  }
}

export default ConditionalRendering
