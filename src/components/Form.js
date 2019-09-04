import React from 'react';

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

   render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}
