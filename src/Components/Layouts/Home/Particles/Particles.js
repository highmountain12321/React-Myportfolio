import React from "react";
import Particles from "react-particles-js";
import Classes from "./Particles.module.css";

const particles = (props) => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          color: {
            value: "#53535366",
          },
          size: {
            value: 4,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
      className={Classes.canvas}
      canvasClassName={Classes.particles}
      //   style={{
      //     position: "absolute",
      //     width: "100%",
      //     height: "90vh !important",
      //   }}
    />
  );
};
export default particles;
