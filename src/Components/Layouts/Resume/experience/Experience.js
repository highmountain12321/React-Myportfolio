import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Classes from "./Experience.module.css";

export default function Experience() {
  return (
    <>
      <div className={Classes.experience}>
        <h2>Experience</h2>
        <span>My Experience</span>
      </div>
      <VerticalTimeline className={Classes.timeline} animate={false}>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#191d2b", color: "#fff", border: "0px" }}
          contentArrowStyle={{ borderRight: "7px solid #191d2b" }}
          date="2021 - Present"
          iconStyle={{
            background: "#191d2b",
            color: "#037fff",
            fontSize: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={<i class="fas fa-briefcase"></i>}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Leapfrog Technology Inc.</h4>
          <p>
            Currently working as a Software Engineer at Leapfrog Technology Inc. My job is used to build an excellent softwares for health care devices using modern
            technologies.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#191d2b", color: "#fff", border: "0px" }}
          contentArrowStyle={{ borderRight: "7px solid #191d2b" }}
          date="2020 - Dec 2020"
          iconStyle={{
            background: "#191d2b",
            color: "#037fff",
            fontSize: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={<i class="fas fa-briefcase"></i>}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">SochWare</h4>
          <p>
            Worked as a React js developer at sochware. My work is
            build modern web design, interact with API's. Here, built hospital
            management system (HMS) for Suswastha hospital.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#191d2b", color: "#fff", border: "0px" }}
          contentArrowStyle={{ borderRight: "7px solid #191d2b" }}
          date="2019 - 2020"
          iconStyle={{
            background: "#191d2b",
            color: "#037fff",
            fontSize: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={<i class="fas fa-briefcase"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            Frond-End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Seshra Innovation
          </h4>
          <p>
            I have been appointed as web deginer Intern at Seshra Invvation. My
            work is used desigh a full responsive websites for clients
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "#191d2b", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #191d2b" }}
          date="2019"
          iconStyle={{
            backgroundColor: "#191d2b",
            color: "#037fff",
            fontSize: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={<i class="fas fa-briefcase"></i>}
        >
          <h3 className="vertical-timeline-element-title">Game Development</h3>
          <h4 className="vertical-timeline-element-subtitle">TechTrix Nepal</h4>
          <p>I had been 1 week workshop on Game Development.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
