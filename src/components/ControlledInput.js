// Code ControlledInput Component Here
import React from 'react';
 
class ControlledInput extends React.Component {
  state = {
    value: '',
  }
 
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    alert("Submitted!")
  }
 
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
 
export default ControlledInput;