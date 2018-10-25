<<<<<<< HEAD
import React from 'react';

export default class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }



  render() {
    return(
      <form onSubmit={ event => this.handleSubmit(event) }>
       <input 
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange}
       />
=======
import React from 'react'

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  render() {
    return(
      <form>
      <input type="text" name="firstName" value={this.state.firstName} />
      <input type="text" name="lastName" value={this.state.lastName} />
>>>>>>> 0b6fe1a8e0c1bdcf705ba8a3dffefef879df64f9
      </form>
    )
  }
}
