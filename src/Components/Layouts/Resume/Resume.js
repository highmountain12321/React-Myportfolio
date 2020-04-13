import React from "react";
import Content from "./content/Content";
import Skills from "./Skills/Skills";
import Classes from "./Resume.module.css";

const resume = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.content}>
        <div className={Classes.resume}>
          <h2>Resume</h2>
          <span>My Resume</span>
        </div>
        <Content />
        <Skills />
      </div>
    </div>
  );
};
export default resume;
