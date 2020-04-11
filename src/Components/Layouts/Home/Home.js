import React from "react";
import Icons from "./SocilaIcons/Icons";
import Typed from "react-typed";
import Classes from "./Home.module.css";
const home = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <h1>
            Hi, I am <span>Sajid Ansari</span>
          </h1>
          <Typed
            strings={["PHP Developer", "Laravel Developer", "React Developer"]}
            typeSpeed={40}
            backSpeed={50}
            className={Classes.typedcursor}
            loop
          ></Typed>
          <div class={Classes.socila_icons}>
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
};
export default home;
