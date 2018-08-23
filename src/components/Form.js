import React from 'react'

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleNameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleNameChange} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleNameChange} />
      </form>
    )
  }
}

export default Form
