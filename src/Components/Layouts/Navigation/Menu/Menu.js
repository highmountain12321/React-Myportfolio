import React, { Component } from "react";
import Classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  state = {
    menu: [
      { id: 1, name: "Home", path: "/" },
      { id: 2, name: "About", path: "/about" },
      { id: 3, name: "Resume", path: "/resume" },
      { id: 4, name: "Projects", path: "/projects" },
      { id: 5, name: "Contact", path: "/contact" },
    ],
  };
  render() {
    return (
      <ul className={Classes.list}>
        {this.state.menu.map((menu) => {
          return (
            <li key={menu.id}>
              <NavLink
                onClick={this.props.clicked}
                exact
                to={menu.path}
                activeClassName={Classes.active}
              >
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
