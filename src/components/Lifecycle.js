import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Annu'
      }
      console.log('LifeCycle A constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }
    // Updating method
    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate')
    }
    changeState = () =>{
        this.setState({
            name: 'Anukirti Bharti'
        })
    }
    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                <h2>LifeCycle A</h2>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default Lifecycle
