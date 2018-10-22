import React from 'react'

class ControlledInput extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.sendFormDataSomewhere(this.state)
  // }

  render(){
    return(
      // onSubmit={this.handleSubmit(event)}
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleChange(event)}/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleChange(event)} />
      </form>
    )
  }
}

export default ControlledInput
