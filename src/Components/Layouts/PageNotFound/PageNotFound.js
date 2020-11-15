import React from "react";
import Classes from "./PageNotFound.module.css";

const Pagenotfound = () => {
  return (
    <div className={Classes.content}>
      <div className={Classes.pagenotfound}>
        <h2>Opps!</h2>
        <span>PageNotFound</span>
      </div>
    </div>
  );
};
export default Pagenotfound;
