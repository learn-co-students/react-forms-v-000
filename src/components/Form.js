// Code ControlledInput Component Here
import React from 'react';
import DisplayData from './DisplayData';
import ParentComponent from './ParentComponent'


class Form extends React.Component {
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="firstName"onChange={event => this.props.handleChange(event)} value={this.props.formData.firstName} />
                    <input type="text" name="lastName"onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName} />
 
                </form>
             </div>
        )
    }
    
/*  NOTE: According to the Lession the Submmition is Omitted for now.

Controlling forms makes it more convenient to share form values between components.
 Since the form values are stored in state, 
they are easily passed down as props or sent upward
 via a function supplied in props.
 Creating all round circle.


*/ 

    
  
   
}
export default Form;

//  Side NOte: We can use controller or uncontroll compenent to submit the form.