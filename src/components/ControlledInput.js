import React, { Component} from 'react'

export default class ControlledInput extends Component{
  state = {
    name: "John",
  }
  handleChange = event => {
    this.setState({
      name: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomeWhere(this.state)
  }

  render(){
    return (
    <form onSubmit={event => this.handleSubmit(event)}>
      <input type="text" value={this.state.name} onChange={this.handleChange} />
    </form>
    )
  }
}
