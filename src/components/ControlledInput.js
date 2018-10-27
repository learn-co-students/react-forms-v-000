// Code ControlledInput Component Here
import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: 'Bob',
      lastName: 'Bobby'
    }
  }
  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  render () {
    return (
      <form>
        <input type="text" onChange={event => this.handleFirstNameChange(event)} name="firstName" value={this.state.firstName} />
        <input type="text" onChange={event => this.handleLastNameChange(event)} name="lastName" value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;
