import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    //   we can even do binding in class constructor. So we don't need to bind in event call.
    }
    clickHandler(){
        this.setState({
            message:'Goodbye....!'
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* using arrow function  */}
        {/* <button onClick={() => this.clickHandler()}>ClickArrow</button> */}
        {/* <button onClick={this.clickHandler.bind(this)}>ClickBind</button> */}
        {/* since it is a Handler not a normal function we have to bind this else it will take this as undefined */}
      
        <button onClick={this.clickHandler}>ClickConstructorBind</button>
      </div>
    )
  }
}

export default EventBind
