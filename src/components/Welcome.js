import React, {Component} from 'react';

class Welcome extends Component{
    render(){
        const {name, heroName} = this.props
        return (
            <div>
                {/* <h1>Welcome - Class Components</h1> */}
                <h2> Class Components - {name} a.k.a {heroName}</h2>
            </div>
            
        )
    }
}

export default Welcome;