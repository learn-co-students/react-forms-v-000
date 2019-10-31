// Code ControlledInput Component Here
import React from 'react';
import DisplayData from './DisplayData'
import ParentComponent from './ParentComponent'


class Form extends React.Component {
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={event => this.props.handleFirstNameChange(event)} value={this.props.formData.firstName} />
                    <input type="text" onChange={event => this.props.handleLastNameChange(event)} value={this.props.formData.lastName} />
 
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

    
    //  Function to handle submit
            // handleSubmit = event => {
            //     event.preventDefault()
            //     formData = { firstName: this.state.firstName, lastName: this.state.state.lastName }
            //     //  putting together the current form data using the values stored in state.
            //     this.sendFormDataSomewhere(formData)
            //     // sendFormDataSomewhere send our data off to somewhere. Often it a prop. In most cases, it send it off to the 
            //     //  server here. But for here, we have it store in the State by listing out the submission
            //     this.setState({submittedData: dataArray})
            // }
            
            // listOfSubmission = () => {
            //     return this.state.submittiedData.map(data => {
            //         return <div><span>{data.firstName}</span><span>{data.lastName}</span></div>
            //     })
            // }
            
    // render(){
    //     return (
    //         //  we setup onSubmit to submit a form. Submit a Form
    //         //  Write a function to Handle "this.handleSubmit(event)"
    //     <div>
    //         <form onSubmit={event => this.handleSubmit(event)}>
    //             <input type="text" onChange={event => this.handleFirstNameChange(event)}  value={this.state.firstName}/>
    //             <input type="text" onChange={event => this.handleLastNameChange(event)}  value={this.state.lastName}/>
    //         <input type="submit"/>
    //         </form>
    //         { this.listOfSubmission() }
    //      </div>
    //     )
    // }
}
export default Form;

//  Side NOte: We can use controller or uncontroll compenent to submit the form.