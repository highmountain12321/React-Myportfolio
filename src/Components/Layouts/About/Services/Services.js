import React from "react";
import Header from "./Header/Header";
import Contents from "./content/Contents";
import Auxillary from "../../../../hoc/Auxillary";
import Classes from "./Services.module.css";

const service = () => {
  return (
    <Auxillary>
      <div className={Classes.services}>
        <Header />
        <Contents />
      </div>
    </Auxillary>
  );
};
export default service;
