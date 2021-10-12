import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TheLayout from "./container";
import CouponRecog from "./pages/CouponRecog";
import FindingId from "./pages/FindingId";
import FindingIdResult from "./pages/FindingIdResult";
import FindingPw from "./pages/FindingPw";
import FindingPwResult from "./pages/FindingPwResult";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => (
  // <div className="container">
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/findingid/result/:result" component={FindingIdResult} />
    <Route exact path="/findingid" component={FindingId} />
    <Route exact path="/findingpw/result" component={FindingPwResult} />
    <Route exact path="/findingpw" component={FindingPw} />
    <Route exact path="/couponRecog" component={CouponRecog} />

    <Route path="/" component={TheLayout} />

    <Redirect to="/login" />
  </Switch>
  // </div>
);

export default App;
