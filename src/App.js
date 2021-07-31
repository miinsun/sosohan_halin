import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TheLayout from "./container";
import Linkhistory from "./pages/LinkReceptionHistory";
import LinkSuggest from "./pages/LinkSuggestion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => (
  // <div className="container">
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/linksuggest" component={LinkSuggest} />
    <Route exact path="/linkhistory" component={Linkhistory} />
    <Route path="/" component={TheLayout} />
    <Redirect to="/login" />
  </Switch>
  // </div>
);

export default App;
