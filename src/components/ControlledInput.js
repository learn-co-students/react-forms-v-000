import React from 'react'

export default class ControlledInput extends React.Component {
	state = {
	  firstName: "John",
	  lastName: "Henry"
	}

	handleChange = event => {
	  this.setState({
	    [event.target.name]: event.target.value
	  })
	}

	//*sends data wherever we need them to go upon submission
	// handleSubmit = event => {
	//   event.preventDefault()
	//   this.sendFormDataSomewhere(this.state)
	// }

	render() {
		return (
      		<form onSubmit={event => this.handleSubmit(event)}>
        		<input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
				<input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
				<input type="submit" value="Submit" />
      		</form>
    	)
  	}
}
