// Code ControlledInput Component Here
import React from 'react';
import { Component } from 'react';


class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    }, () => console.log(this.state.firstName))
  }
   
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    }, () => console.log(this.state.lastName))
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }
  
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <p>First name value: {this.state.firstName}</p>
        <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <p>Last name value: {this.state.lastName}</p>
      </form>
    )
  }
}

export default ControlledInput;