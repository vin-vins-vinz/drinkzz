import React from "react";
import {button} from "semantic-ui-react"

export const FormBtn = props =>
  <button {...props} style={{ float: "inherit" }} className="btn btn-success" secondary>
    {props.children}
  </button>;
