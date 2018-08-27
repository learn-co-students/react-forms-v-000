import React, { Component } from "react";

export default class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  };

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handlelastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          onChange={event => this.handleFirstNameChange(event)}
          value={this.state.firstName}
        />

        <input
          type="text"
          name="lastName"
          onChange={event => this.handlelastNameChange(event)}
          value={this.state.lastName}
        />
      </form>
    );
  }
}
