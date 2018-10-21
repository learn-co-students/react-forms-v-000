// Code ControlledInput Component Here
import React from 'react'

export default class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <input
       type="text"
       value={this.state.value}
       onChange={this.handleChange}
       />
    )
  }
}
