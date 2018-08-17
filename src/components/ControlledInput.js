import React from 'react'
export default class ControlledInput extends React.Component{

    state = {
        firstName: "John",
        lastName: "Henry"
      }

      handleNameChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
     
      render() {
        return (
          <form>
            <input onChange={this.handleNameChange} type="text" name="firstName" value={this.state.firstName} />
            <input onChange={this.handleNameChange} type="text" name="lastName" value={this.state.lastName} /> 
          </form>
        )
      }

}