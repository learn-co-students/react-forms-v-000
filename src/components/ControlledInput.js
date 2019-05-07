// Code ControlledInput Component Here
import React, { Component } from 'react';
import Profile from './Profile.js'

class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleChange(event)} />
          <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleChange(event)} />
          <input type="submit" name="Submit" />
        </form>


        <p class="profile-info">{this.state.firstName} {this.state.lastName}</p>

        <p><Profile firstName={this.state.firstName} lastName={this.state.lastName} /></p>
      </div>
    )
  }
}

export default
  ControlledInput
