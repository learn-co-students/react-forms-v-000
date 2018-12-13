// // Code ControlledInput Component Here

import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit= event => {
    event.preventDefault()
    this.sendFormDateSomewhere(this.state)
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
      )
  }
}
 export default ControlledInput;

handleFirstNameChange = event => {
  this.setState({
    firstName: event.target.value
  })
}

handleLastName = event => {
  this.setState({
    lastName: event.target.value
  })
}

to avoid verbosity, refactor this as: 

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          />
          <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          />
        </form>
      )
  }
}


class Form extends Component {
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

  render() {
    return (

      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />

        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }

}