import React, { Component } from 'react';

class Form extends Component {
  state = {
    firstName: "Joe",
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
        <input type="text" onChange={e => this.handleFirstNameChange(e)} id="firstName" value={this.state.firstName} />
        <input type="text" onChange={e => this.handleLastNameChange(e)} id="lastName" value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;