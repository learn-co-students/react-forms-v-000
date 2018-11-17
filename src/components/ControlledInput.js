import React, {Component} from 'react'

export default class Form extends Component {

  constructor() {
    super()

    this.state = {
      firstName: "John",
      lastName: "Henry"
    }

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
      <div>
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName}/>
        <input type="text" name="lastName" onChange= {event => this.handleLastNameChange(event)} value={this.state.lastName}/>
      </form>
      <p>{this.state.firstName}</p>
      </div>
    )
  }
}
