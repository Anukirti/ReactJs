import React, { Component } from 'react'
import HOC from './HOC'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   incrementCount = () =>{
    //       this.setState(preState => {
    //           return {count: preState.count + 1}
    //       })
    //   }
  render() {
    // const {count} = this.state
    const {count, incrementCount} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount} >
           Hovered {count} times</h1>
      </div>
    )
  }
}

export default HOC(HoverCounter,10)
