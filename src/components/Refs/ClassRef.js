import React, { Component } from 'react'
import Input from './Input'

class ClassRef extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }
    clickHandler = () =>{
        this.componentRef.current.focusInput()
        // focusInput is already defind in child component Input
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default ClassRef
