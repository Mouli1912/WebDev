import React, { Component } from 'react';

class Counter extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>Counter App</h1>
                <button>Increment</button>
            </React.Fragment>
        );
        // return (
        //
            <div>
                <h1>Counter App</h1>
                <button>Increment</button>
            </div>
        // );
    }
}
 
export default  Counter;