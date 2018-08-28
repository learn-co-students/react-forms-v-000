
import React, { Component } from 'react'

export default class Form extends Component {
    state = {
      firstName: '',
      lastName: ''
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
   
    render() {
      return (
        <form>
            <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
            <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        </form>
      )
    }
  }