import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import ParentComponent from "./components/ParentComponent";
import DisplayData from "./components/DisplayData";

ReactDOM.render(
  <div>
    <ParentComponent />
    <Form />
    <DisplayData />
  </div>,
  document.getElementById("root")
);
