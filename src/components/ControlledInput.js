// Code ControlledInput Component Here
import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text"
               value={this.state.value}
               onChange={this.handleChange}
        />
      </form>
    );
  }
}
