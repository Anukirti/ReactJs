import React from "react";

const HOC = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incrementCount = () =>{
              this.setState(preState => {
                //   return {count: preState.count + 1}
                // as per parameter passed
                return {count: preState.count + incrementNumber}
              })
          }
        render(){
            return <OriginalComponent 
            count ={this.state.count} 
            incrementCount = {this.incrementCount}
            {...this.props}
            />
        }
    }
    return NewComponent
}

export default HOC