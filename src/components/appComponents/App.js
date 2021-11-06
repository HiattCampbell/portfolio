import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "../../index.css";
import "../../styles/App.css";
import Nav from "./Nav";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";
import Contact from "../../pages/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <div className="bodyContainer">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
