// Code ControlledInput Component Here
import React, { Component } from 'react';
export default class ControlledInput extends Component {
  state = {
    value: 'this is the value. ha!3',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.sendFormDataSomewhere(this.state)
  // }

  render(){
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
