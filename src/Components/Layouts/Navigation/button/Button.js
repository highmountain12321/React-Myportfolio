import React from "react";
import Classes from "./Button.module.css";

const button = (props) => {
  const iconshape = props.iconshap ? "far fa-window-close" : "fas fa-bars";
  return (
    <button onClick={props.clicked} className={Classes.hamburger}>
      <i class={iconshape}></i>
    </button>
  );
};
export default button;
