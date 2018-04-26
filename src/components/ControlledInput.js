import React from 'react';

class ControlledInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 'sup',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default ControlledInput;
