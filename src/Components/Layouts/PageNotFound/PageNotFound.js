import React from "react";
import Classes from "./PageNotFound.module.css";

const pagenotfound = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.content}>
        <div className={Classes.pagenotfound}>
          <h2>Opps!</h2>
          <span>PageNotFound</span>
        </div>
      </div>
    </div>
  );
};
export default pagenotfound;
