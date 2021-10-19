import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TheLayout from "./container";
import CouponRecog from "./pages/CouponRecog";

const App = () => (
  <Switch>

    <Route exact path="/couponRecog" component={CouponRecog} />

    <Route path="/" component={TheLayout} />

    {/* <Redirect to="/login" /> */}
    <Redirect to="/" />
  </Switch>
);

export default App;
