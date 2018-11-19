// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component{

  state = {
    value: "",
  }

  handleChange = event => {
    this.setState:({
      value: this.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={event =>
        this.handlesubmit(event)}>
        <input
          type="text"
          value={"this.state.value"}
          onChange={"this.handleChange"}/>
          </form>
    );
  }
}

export default ControlledInput;
