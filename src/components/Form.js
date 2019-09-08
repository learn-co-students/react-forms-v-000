import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleSubmit = event => {
    event.preventDefault()
    const firstName = event.target.children[0].value
    const lastName = event.target.children[0].value
    this.sendFormDataSomewhere({ firstName, lastName })
  }

  /*handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  }*/
  handleChange = event => {
    this.setState({
      [event.target.name]: event.taret.value
    });
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lasttName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    );
  }
}

export default Form;
