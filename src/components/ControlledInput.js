// Code ControlledInput Component Here

import React from 'react';

class ControlledInput extends React.Component {
  constructor () {
    super ();
    //define the initial value by setting the initial value property on the state
    this.state = {
      value: '',
    };
  }
  //Whenever state changes, the component re-renders, rendering the input with the new updated value
  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    )
  }
}

export default ControlledInput;
