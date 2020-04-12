import React from "react";
import Aboutfont from "./Aboutfont/Aboutfont";
import Aboutdetails from "./Aboutdetails/Aboutdetails";
import Services from "./Services/Services";
import Classes from "./About.module.css";

const about = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.content}>
        <Aboutfont />
        <Aboutdetails />
        <Services />
      </div>
    </div>
  );
};
export default about;
