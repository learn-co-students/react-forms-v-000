import React from 'react'

class Form extends React.Component {
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
        <input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={event => this.handleFirstNameChange(event)} />
        <input type="text" name="lastName" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form
