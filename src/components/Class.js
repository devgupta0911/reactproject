import React, { Component } from 'react'

class MyComponent extends Component.React{
    constructor(props){
        super(props);
        this.state ={favoritecolor:"red" };
    }
    changeColor =() => {
        this.Setstate({favoritecolor:"yellow"});
    }
    render(){
        return(
            <div>
                <h1>Favorite Color is {this.state.favi}</h1>
                <button type='button' onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

export default MyComponent;