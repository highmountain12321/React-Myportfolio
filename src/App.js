import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layouts from "./Components/Layouts/Layouts";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layouts />
      </BrowserRouter>
    );
  }
}

export default App;
