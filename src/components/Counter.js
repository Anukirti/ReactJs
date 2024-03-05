import React,{Component} from 'react'

class Counter extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    increment(){ 
        // this.state.count = this.state.count + 1  
        // console.log(this.state.count); // this will change the value but not updare the UI.

        // this.setState({
        //     count: this.state.count + 1
        //     },
        //     () => {
        //         console.log('Callback Value', this.state.count)
        //     }    
        // )
        // console.log(this.state.count) 
        //value will be one less that it apperas in UI here as it logs first and then update.
        // we should not log state value outside setStae method.
    

        this.setState(prevState =>({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

    }

    render(){
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter;