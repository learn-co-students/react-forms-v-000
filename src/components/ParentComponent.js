//  this was created as a parent components.
//  This Handles all the logic while Form HAndles all the display of JSX

import React from 'react';
import Form from './Form';
import DisplayData from './DisplayData'

// import { defaultCipherList } from 'constants';
// Test

class ParentComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }
    /*
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
    INSTEAD. We MAKE THIS CODE DYNAMIC BY:
    */
    
    handleChange = event => {
        this.setState({
                    [event.target.name]: event.target.value
                })
            }

    render() {
        return (
            <div>
            <Form
                formData={this.state}
                // handleFirstNameChange={this.handleFirstNameChange}
                // handleLastNameChange={this.handleLastNameChange}
                //  THIS is CHANGED TO. 

                handleChange={this.handleChange}/>
            < DisplayData formData={this.state} />
            </div>
        )
    }

}


export default ParentComponent;