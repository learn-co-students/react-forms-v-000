import React from 'react';
export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "John",
      lastName: "Henry"
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <label>First Name</label>
        <input type="text" id="firstName"
        onChange={event => this.handleChange(event)}
        value={this.state.firstName} />
        <label>Last Name</label>
        <input type="text" id="lastName"
        onChange={event => this.handleChange(event)}
        value={this.state.lastName} />
      </form>
    )
  }
}
