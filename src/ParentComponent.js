//  this was created as a parent components.
//  This Handles all the logic while Form HAndles all the display of JSX

import React from 'react';
import Form from './Form';
import DisplayData from './DisplayData'

import { defaultCipherList } from 'constants';

class ParentComponent extends React.Component {
    state = {
        firstName: "John",
        lastName: "Henry"
    }
    handleFirstNameChange = event => {
        this.state({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.state({
            lastName: event.target.value
        })
    }

    render() {
        return (
            <Form
                formData={this.state}
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChange={this.handleLastNameChange}
            
            />
        )
    }

}


export default ParentComponent;