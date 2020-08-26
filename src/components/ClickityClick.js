// Code ClickityClick Component Here
import React,{ Component } from 'react'

 class ClickityClick extends Component{
    constructor() {
        super();
    
        // Define the initial state:
        this.state = {
          hasBeenClicked: false
        };
      }

    handleClick = (e) => {
        
        
        this.setState((firstState) => {
            console.log("this", firstState.hasBeenClicked)
            return {hasBeenClicked: !firstState.hasBeenClicked}
        })
        
    }
    

    render(){
        return (
            <div>
                <p>
                    I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
                </p>
                <button onClick={this.handleClick}> Click me! </button>
            </div>
        )
    }
}


export default ClickityClick;