import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import India from "./component/India";
import World from "./component/World";
import Header from "./component/Header";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <India />
            </Route>
            <Route exact path="/india">
              <India />
            </Route>
            <Route exact path="/world">
              <World />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
