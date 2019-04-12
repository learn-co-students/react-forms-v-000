// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: "Nadia",
			lastName: "Fernandez"
		}
	}

	handleChanges = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.sendFormDataSomewhere(this.state)
	}

	sendFormDataSomewhere = (passedState) => {
		console.log(passedState) // => Object: {firstName: "Nadia", lastName: "Fernandez A"}
	}

	render() {
		return (
			<form onSubmit={event => this.handleSubmit(event)}>
				<input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleChanges(event)} />
				<input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleChanges(event)} />
				<input type="Submit" value="Submit" />>
			</form>
		)
	}
}