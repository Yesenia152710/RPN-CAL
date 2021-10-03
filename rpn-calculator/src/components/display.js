import React from "react";
import "./display.css";

function Display(props) {
  return (
    <div className="displays">
      <div name="display__1">{props.children}</div>
      <div name="display__2">{props.children}</div>
      <div name="display__3">{props.children}</div>
      <div name="display__4">{props.children}</div>
    </div>
  );
}

export default Display;
