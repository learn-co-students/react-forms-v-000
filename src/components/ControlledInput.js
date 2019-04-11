// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {
	constructor() {
		super()
		this.state = {
			value: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		})
	}

	handleSubmit = (e) => {
  		e.preventDefault()
  		this.sendFormDataSomewhere(this.state)
	}


	render () {
		return (
			<form
				onSubmit={ (e) => this.handleSubmit(e) }  >
				<input 
					type='text' 
					value={this.state.value} 
					onChange={ (e) => this.handleChange(e) } />

			</form>
		)
	}
}