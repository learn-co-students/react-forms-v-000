// you must first place the react 
// then the reactDOM from 'react-dom' 
// then the controlled input

import React from 'react';
import ReactDOM from 'react-dom';
 
import ControlledInput from './components/ControlledInput';
 
ReactDOM.render(
  <ControlledInput />,
  document.getElementById('root')
);