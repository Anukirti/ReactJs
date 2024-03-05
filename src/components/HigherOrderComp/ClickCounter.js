import React, { Component } from 'react'
import HOC from './HOC'

export class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // incrementCount = () =>{
    //     this.setState(preState => {
    //         return {count: preState.count + 1}
    //     })
    // }
  render() {
    // const {count} = this.state
    const {count, incrementCount} = this.props
    return (
      <div>
        <button 
        onClick={incrementCount}> 
        {this.props.name} 
         Clicked {count} times</button>
      </div>
    )
  }
}

export default HOC(ClickCounter,5)
