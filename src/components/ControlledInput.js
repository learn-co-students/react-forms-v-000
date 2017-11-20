import React from 'react'

class ControlledInput extends React.Component {
  constructor() {
    super()

    //easily define initial value by setting it to 'value' property on state to whatever we want
    //using controlled component allows to keep all component state in the React state
    this.state = {
      value: '',
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <input
        type='text'
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}

export default ControlledInput
