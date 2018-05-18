// Code ControlledInput Component Here
import React from 'react';

export default class ControlledInput extends React.Component {
	constructor() {
		super();

		this.state = {
			value: '',
		};
	}

	handleChange = event => {
		this.setState({
			value: event.target.value,
		});
	}

	render() {
		return (
			<div>
				<input 
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<h1>Did you know: {this.state.value}</h1>
			</div>		
		);
	}
}