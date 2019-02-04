// Code ControlledInput Component Here
import React from 'react'

export default class ControlledInput extends React.Component {
    state = {
        firstName: '',
        lastName: ''
      }
     
      handleFirstNameChange = event => {
          this.setState=({
              firstName: event.target.value
          })
      }
      
      handleLastNameChange = event => {
          this.setState=({
              lastName: event.target.value
          })
      }
      
      handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
      }

      render() {
        return (
          <form onSubmit={event => this.handleSubmit(event)}>
            <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
            <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          </form>
        )
      }
}