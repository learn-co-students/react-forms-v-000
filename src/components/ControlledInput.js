// Code ControlledInput Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ControlledInput extends React.Component {
  constructor () {
    super ()
    this.state = {
      value: '',
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  render () {
    return (
      <div>
      <input
      type="text"
      value={this.state.value}
      onChange={this.handleChange}
      />
      <h3>{this.state.value}</h3>
      </div>
    )
  }
}
