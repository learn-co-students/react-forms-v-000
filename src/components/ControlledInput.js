import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleNameChange = (event) => {
    console.log(event.target.id)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" id="firstName" onChange={event => this.handleNameChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}
