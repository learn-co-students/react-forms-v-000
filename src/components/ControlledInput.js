// Code ControlledInput Component Here
import React, { Component } from 'react'; 
class ControlledInput extends Component{
	constructor(props){
		super(props);
		this.state = {
			firstName: "",
			lastName: ""
		}
	}

	updateFirstName(e){
		let input = e.target 
		this.setState({
			firstName: input.value 
		});
	}

	updateLastName(e){
		let input = e.target
		this.setState({
			lastName: input.value
		});
	}

	render(){
		return (
		<div>
			<h2>Person Data</h2>
			<form>
				<input type='text' placeholder='First Name' name='firstName' onChange={this.updateFirstName.bind(this)}value={this.state.firstName} />
				<br/><br/>
				<input type='text' placeholder = 'Last Name' name='lastName' value={this.state.lastName} onChange={this.updateLastName.bind(this)} />
				{console.log( this.state.firstName, this.state.lastName )} 
			</form>
		</div>
		);
	}
}

export default ControlledInput
