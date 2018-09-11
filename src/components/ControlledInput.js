// Code ControlledInput Component Here
import React, {Component} from 'react'

export default class ControlledInput extends Component{
  state = {
    value: '',
  }

  handleChangeEvent = event => {
    this.setState({
      value: event.target.value,
    })
  }

  render(){
    return(
      <form onSubmit={event => this.handleChangeEvent(event)}>
        Text Here:<input type="text"
          value={this.state.value}
          onChange={this.handleChangeEvent}/>
      </form>
    )
  }
}
