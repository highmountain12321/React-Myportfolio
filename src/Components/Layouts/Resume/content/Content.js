import React from "react";
import Education from "./education/Education";
import Expertise from "./expertise/Expertise";
import Classes from "./Content.module.css";

const content = () => {
  return (
    <div className={Classes.education_expertise}>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <Education />
        </div>
      </div>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <Expertise />
        </div>
      </div>
    </div>
  );
};
export default content;
