import React, { Component } from "react";
import Auxillary from "../../../../hoc/Auxillary";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import Classes from "./Skills.module.css";

class Skills extends Component {
  state = {
    skills: [
      { id: 1, name: "HTML", percentage: 99, symbol: "90%" },
      { id: 2, name: "CSS", percentage: 98, symbol: "90%" },
      { id: 3, name: "JAVASCRIPT", percentage: 80, symbol: "90%" },
      { id: 4, name: "PHP", percentage: 85, symbol: "90%" },
      { id: 5, name: "LARAVEL", percentage: 70, symbol: "90%" },
      { id: 6, name: "REACT", percentage: 75, symbol: "90%" },
    ],
  };
  render() {
    let skills = this.state.skills.map((skill) => {
      return (
        <div key={skill.id} className={Classes.box}>
          <div className={Classes.content}>
            <p>{skill.name}</p>
            <h6>{skill.percentage}%</h6>
            <Progress
              percent={skill.percentage}
              status="success"
              strokeWidth={3}
              className={Classes.back}
              symbolClassName={Classes.symbol}
              theme={{
                success: {
                  trailColor: "transparent",
                  color: "#037fff",
                },
              }}
            />
          </div>
        </div>
      );
    });
    return (
      <Auxillary>
        <div className={Classes.skills}>
          <h2>Skills</h2>
          <span>My Skills</span>
        </div>
        <div className={Classes.skills_content}>{skills}</div>
      </Auxillary>
    );
  }
}

export default Skills;
