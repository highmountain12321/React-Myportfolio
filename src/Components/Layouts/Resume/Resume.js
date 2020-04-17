import React from "react";
import Content from "./content/Content";
import Skills from "./Skills/Skills";
import { Spring } from "react-spring/renderprops";
import Classes from "./Resume.module.css";

const resume = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 500 }}
    >
      {(props) => (
        <div style={props} className={Classes.container}>
          <div className={Classes.content}>
            <div className={Classes.resume}>
              <h2>Resume</h2>
              <span>My Resume</span>
            </div>
            <Content />
            <Skills />
          </div>
        </div>
      )}
    </Spring>
  );
};
export default resume;
