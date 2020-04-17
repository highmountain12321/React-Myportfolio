import React from "react";
import Aboutfont from "./Aboutfont/Aboutfont";
import Aboutdetails from "./Aboutdetails/Aboutdetails";
import Services from "./Services/Services";
import { Spring } from "react-spring/renderprops";
import Classes from "./About.module.css";

const about = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 500 }}
    >
      {(props) => (
        <div style={props} className={Classes.container}>
          <div className={Classes.content}>
            <Aboutfont />
            <Aboutdetails />
            <Services />
          </div>
        </div>
      )}
    </Spring>
  );
};
export default about;
