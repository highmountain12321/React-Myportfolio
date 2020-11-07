import React from "react";
import Icons from "./SocilaIcons/Icons";
import Typed from "react-typed";
import Particles from "./Particles/Particles";
import Auxillary from "../../../hoc/Auxillary";
import Classes from "./Home.module.css";
const home = () => {
  return (
    <Auxillary>
      <Particles />
      <div className={Classes.container}>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <h1>
              Hi, I am <span>Sajid Ansari</span>
            </h1>
            <Typed
              strings={[
                "NodeJs Developer",
                "React Developer",
                "PHP Developer",
                "Laravel Developer",
              ]}
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
    </Auxillary>
  );
};
export default home;
