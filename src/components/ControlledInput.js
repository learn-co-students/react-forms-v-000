import React, { Component } from 'react'

export default class ControlledInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: ''
    }
  }

  handleChange = (e) => { 
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }
  
  render() {
    return (
      <input
        type="text"
        value={ this.state.value }
        onChange={ this.handleChange }
      />
    )
  }
}
