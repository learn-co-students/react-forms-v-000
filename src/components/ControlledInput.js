// Code ControlledInput Component Here
import React, { Component } from 'react';

export default class ControlledInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		});
	};

	render() {}
}
