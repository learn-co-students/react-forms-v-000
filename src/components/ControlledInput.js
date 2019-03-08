import React from 'react';
// Code ControlledInput Component Here

export default class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const firstName = event.target.children[0].value
    const lastName = event.target.chidren[0].value
    this.sendFormDataSomewhere({ firstName, lastName })
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <input type="text" id="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}
