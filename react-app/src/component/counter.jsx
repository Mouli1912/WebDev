import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
   
    // constructor(){
    //     super();
    //     this.hnandleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement = () =>{
        
        this.setState({count: this.state.count + 1});
        console.log(product);
        // obj.method();
        //function();
    }
    doHandleIncremenr= () => {

        this.handleIncrement({id :1});
    };
    
   // render(){
   // let classes ="badge m-2 badge-;
   // classes += this.state.count === 0 ? "warning" : primary;}
    render() { 
        let classes = this.getBagdeClasses();
        return (
            <div>
<span className={classes}> {2+2}{this.fomateCount()}</span>
<button onclick={this.doHandleIncrement} className="btn btn-secondary m-2" >Increment</button>
{this.state.tags.length === 0 && "please create a new tag!"}
{this.renderTags()}

            </div>
          
        );
       
    }
getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
}

    fomateCount(){
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default  Counter;