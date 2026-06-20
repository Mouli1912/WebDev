import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    
   // render(){
   // let classes ="badge m-2 badge-;
   // classes += this.state.count === 0 ? "warning" : primary;}
    render() { 
        return (
            <div>
<span className="badge badge-primary m-2"> {2+2} 
    {this.fomateCount()}
</span>
<button>Increment</button>
            </div>
          
        );
       
    }
    fomateCount(){
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default  Counter;