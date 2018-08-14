import React, { Component } from 'react';

class ControlledInput extends Component {
  state = { 
    firstName: "John",
    lastName: "Henry"
  };

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.sendFormDataSomewhere(this.state);
  };

  sendFormDataSomewhere = (data) => {
    console.log(data);
  };

  render() { 
    return ( 
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type="submit" />
      </form>
     );
  }
}
 
export default ControlledInput;