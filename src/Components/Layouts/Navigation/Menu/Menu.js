import React, { Component } from "react";
import Classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  state = {
    menu: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Resume", path: "/resume" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ],
  };
  render() {
    return (
      <ul className={Classes.list}>
        {this.state.menu.map((menu) => {
          return (
            <li>
              <NavLink exact to={menu.path} activeClassName={Classes.active}>
                {menu.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Menu;
