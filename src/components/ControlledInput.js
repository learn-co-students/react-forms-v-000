import React, { Component } from 'react';


class Form extends Component {
  state = {
    firstName: 'John',
    lastName: 'Henry'
  }

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  render() {
    return(
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
        <br />
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleLastNameChange}/>
      </form>
    );
  }
}

export default Form;
