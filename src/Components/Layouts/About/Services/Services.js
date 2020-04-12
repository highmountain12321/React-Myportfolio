import React from "react";
import Header from "./Header/Header";
import Auxillary from "../../../../hoc/Auxillary";
import Classes from "./Services.module.css";

const service = () => {
  return (
    <Auxillary>
      <div className={Classes.services}>
        <Header />
      </div>
    </Auxillary>
  );
};
export default service;
