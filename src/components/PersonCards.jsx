import React, { Component } from 'react';
    
    
class PersonCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            age:this.props.age
        }
    }
    
//          event (was here before)
    addAge = () => {
        // console.log(event)
        this.setState({
            age:this.state.age +1
        })
    }
    render() {
        return (
            <div>
                <h2>{this.props.lastName} {this.props.firstName}</h2>
                <p>age: {this.state.age}</p>
                <p>hair color: {this.props.hairColor}</p>
                {this.state.number}
            <button onClick={this.addAge}> birthday button for {this.props.firstName}</button>

            </div>
        );
    }
}
    
export default PersonCard;