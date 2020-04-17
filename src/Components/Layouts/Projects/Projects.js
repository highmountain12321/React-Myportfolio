import React from "react";
import Project from "./Project/Project";
import { Spring } from "react-spring/renderprops";
import Classes from "./Projects.module.css";

const projects = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 500 }}
    >
      {(props) => (
        <div style={props} className={Classes.container}>
          <div className={Classes.content}>
            <div className={Classes.projetcs}>
              <h2>Projects</h2>
              <span>My Projects</span>
            </div>
            <Project />
          </div>
        </div>
      )}
    </Spring>
  );
};
export default projects;
