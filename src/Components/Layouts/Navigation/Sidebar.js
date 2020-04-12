import React from "react";
import Profile from "./Profile/Profile";
import Menu from "./Menu/Menu";
import Button from "./button/Button";
import Auxillary from "../../../hoc/Auxillary";
import Classes from "./Sidebar.module.css";

const sidebar = (props) => {
  const sidebar = [
    Classes.sidebar,
    props.Opensidebar ? Classes.Opensidebar : Classes.Closesidebar,
  ];
  return (
    <Auxillary>
      <nav className={sidebar.join(" ")}>
        <Button iconshap={props.Opensidebar} clicked={props.clicked} />
        <Profile />
        <Menu clicked={props.clicked} />
      </nav>
    </Auxillary>
  );
};
export default sidebar;
