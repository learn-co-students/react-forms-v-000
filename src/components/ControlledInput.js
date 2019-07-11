import React from 'react'

class ControlledInput extends React.Component {

  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // handleFirstNameChange = e => {
  //   this.setState({
  //     firstName: e.target.value
  //   })
  // }


  // handleLastNameChange = e => {
  //   this.setState({
  //     lastName: e.target.value
  //   })
  // }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   const firstName = e.target.children[0].value
  //   const lastName = e.targe.children[1].value
  //   this.sendFormDataSomeWhere({ firstName, lastName })
  // }


  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" name="firstName" onChange={e => this.handleChange(e)} value={this.state.firstName}/>
        <input type="text" name="lastName" onChange={e => this.handleChange(e)} value={this.state.lastName}/>
      </form>
    )
  }
}

export default ControlledInput
