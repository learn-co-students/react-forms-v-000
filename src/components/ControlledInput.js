// Code ControlledInput Component Here
import React from 'react'

class ControlledInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'your paragraph',
    };
  }

  updateValue = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return(
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default ControlledInput;
