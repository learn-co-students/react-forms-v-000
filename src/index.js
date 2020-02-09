import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import ParentComponent from './components/ParentComponent'

ReactDOM.render(
  <div>
    {/* <Form />  // now rendered as a child of ParentComponent */}
    <ParentComponent />
  </div>,
  document.getElementById('root')
);