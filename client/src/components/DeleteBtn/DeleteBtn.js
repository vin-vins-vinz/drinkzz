import React from "react";
// import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const randomButton = props => (
  <span className="random-button" {...props}>
    
  </span>
);

export default randomButton;
