import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: "Pepper",
    lastName: "Ronni"
  }

  handleNameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <label>First Name:</label>
        <input type="text"
               name="firstName"
               onChange={event => this.handleNameChange(event)}
               value={this.state.firstName} />
        <br />
        <label>Last Name:</label>
        <input type="text"
               name="lastName"
               onChange={event => this.handleNameChange(event)}
               value={this.state.lastName} />
      </form>
    )
  }
}

export default ControlledInput;
