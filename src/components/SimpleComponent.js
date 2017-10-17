// Code SimpleComponentHere Here
import React, { Component } from 'react';

class SimpleComponentHere extends Component {


  handleClick = () => {
    const mood = this.state.mood === 'happy' ? 'sad' : 'happy';
    // if mood is happy change it to sad
    // if mood is sad change it to happy
    this.setState({ mood});
  }

  state = {
    mood: 'happy'
  };
  render(){
      return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
export default SimpleComponentHere;
//
//
// The component should simply render its current mood state to the page in a div.
// The component should implement a handleClick function that can serve as a callback to the <div>'s click event. When clicked, the component's mood should toggle between happy and sad states.
