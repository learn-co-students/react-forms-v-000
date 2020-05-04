import React, { Component } from 'react';
import TextInput from './TextInput';
import validate from './validator';

class FormComponent extends Component {
  
  constructor() {
    super();
  
    this.state = {
      formControls: {
          name: {
            value: ''.
            placeholder: 'What is your name',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 3,
                isRequired: true
            }
          }
      }
    } 
  }


  changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;

      const updatedControls = {
        ...this.state.formControls
      };
      const updatedFormElement = {
        ...updatedControls[name]
      };
      updatedFormElement.value = value;
      updatedFormElement.touched = true;
      updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

      updatedControls[name] = updatedFormElement;

      this.setState({
        formControls: updatedControls
      });
  }
  
  formSubmitHandler = () => {
    console.dir(this.state.formControls);
  }

  
  render() {
      return (  
            <div>
                <TextInput name="name" 
                           placeholder={this.state.formControls.name.placeholder}
                           value={this.state.formControls.name.value}
                           onChange={this.changeHandler}
                />
        
                <button onClick={this.formSubmitHandler}> Submit </button>
            </div>
      );
  }

}