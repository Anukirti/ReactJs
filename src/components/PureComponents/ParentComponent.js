import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent';
import MemoComp from './MemoComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Anukirti'
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Anukirti'
                // try changing the value here to see the diffrence.
            })
        }, 2000)
    }

  render() {
    console.log('Parent Component render')
    return (
      <div>
        Parent Component
        {/* <RegularComponent name={this.state.name}></RegularComponent>
        <PureComp name={this.state.name}></PureComp> */}

        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
