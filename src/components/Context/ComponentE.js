import React, { Component } from 'react'
import UserContext from './userContext'
import ComponentF from './ComponentF'

export class ComponentE extends Component {
  render() {
    return(
        <div>
            Component E context {this.context}
            <ComponentF/>
        </div>
        
    ) 
  }
}

ComponentE.contextType = UserContext
export default ComponentE
