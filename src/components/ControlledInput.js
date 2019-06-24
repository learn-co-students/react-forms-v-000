import React, { Component } from 'react';

export default class ControlledInput extends Component {
  state = {
    value: 'Default',
  }

  handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}
  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text"
          name="fullName"
          value={this.state.fullName}
          onChange={this.handleChange}
        />
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <input id='submit' type="submit" name="submit" value="Submit" />
      </form>
    );
  }
}
