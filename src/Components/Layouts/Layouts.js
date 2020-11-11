import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Sidebar from "./Navigation/Sidebar";
import Auxillary from "../../hoc/Auxillary";
import Pagenotfound from "./PageNotFound/PageNotFound";

const Layouts = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const Opensidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <Auxillary>
      <Sidebar Opensidebar={isSideBarOpen} clicked={Opensidebar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact component={Pagenotfound} />
      </Switch>
    </Auxillary>
  );
};

export default Layouts;
