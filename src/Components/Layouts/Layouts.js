import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Sidebar from "./Navigation/Sidebar";
import Blogs from "../Layouts/Blog/Blog";
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
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact={true} path="/resume" component={Resume} />
          <Route exact={true} path="/blogs" component={Blogs} />
          <Route exact={true} path="/projects" component={Projects} />
          <Route exact={true} path="/404" component={Pagenotfound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Auxillary>
  );
};

export default Layouts;
