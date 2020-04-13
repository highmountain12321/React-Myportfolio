import React from "react";
import Contentone from "./Content1/ContentOne";
import Contenttwo from "./Content2/ContentTwo";
import Contentthree from "./Content3/ContentThree";
import Classes from "./Contents.module.css";

const contents = () => {
  return (
    <div className={Classes.services}>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <Contentone />
        </div>
      </div>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <Contenttwo />
        </div>
      </div>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <Contentthree />
        </div>
      </div>
    </div>
  );
};
export default contents;
