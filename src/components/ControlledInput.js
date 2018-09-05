// Code ControlledInput Component Here
import React, { Component } from 'react';
 export default class ControlledInput extends Component {
  state = {
    value: '',
  }
   handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }
   render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        <input type="submit" />
      </form>
    );
  }
}