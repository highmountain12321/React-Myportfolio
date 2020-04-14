import React from "react";
import Classes from "./Button.module.css";

const button = (props) => {
  const iconshape = props.iconshap ? "fas fa-times" : "fas fa-bars";
  return (
    <button onClick={props.clicked} className={Classes.hamburger}>
      <i className={iconshape}></i>
    </button>
  );
};
export default button;
