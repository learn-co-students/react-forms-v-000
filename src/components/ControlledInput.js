import React, { Component } from 'react';

class ControlledInput extends Component {
  state = { 
    firstName: "John",
    lastName: "Henry"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.processFormData(this.state);
  };

  processFormData = (data) => {
    // Here we'd normally send the data somewhere
    console.log(data);
  };

  render() { 
    return ( 
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        <input type="submit" />
      </form>
     );
  }
}
 
export default ControlledInput;