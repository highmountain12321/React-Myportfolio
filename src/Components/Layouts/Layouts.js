import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Sidebar from "./Navigation/Sidebar";
import Auxillary from "../../hoc/Auxillary";

class Layouts extends Component {
  state = {
    isopensidebar: false,
  };
  Opensidebar = () => {
    this.setState((preState) => ({
      isopensidebar: !preState.isopensidebar,
    }));
  };
  render() {
    return (
      <Auxillary>
        <Sidebar
          Opensidebar={this.state.isopensidebar}
          clicked={this.Opensidebar}
        />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/about" exact component={About} />
        </Switch>
      </Auxillary>
    );
  }
}

export default Layouts;
