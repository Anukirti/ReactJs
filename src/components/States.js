import React, {Component} from 'react'

class States extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thankyou for subscribing.'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message} </h1>
                <button onClick={()=>this.changeMessage()}>
                    Subscribe</button>
            </div>
        ) 
    }
}

export default States