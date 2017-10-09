import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drinks from "./pages/Drinks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Drinks} />
        <Route exact path="/drinks" component={Drinks} />
        <Route exact path="/drinks/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
