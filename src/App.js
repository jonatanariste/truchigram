import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Feed from "./page-feed";
import Home from "./page-home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
