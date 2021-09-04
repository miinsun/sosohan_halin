import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes, { defaultRedirect } from "../routes";

const TheMain = () => (
  <main className="flex-shrink-0">
    <div className="container">
      {/* <h1 className="mt-5">Welcome to 소소한 할인</h1> */}
      <Switch>
        {
          routes.map((r) => (
            <Route
              {...r}
              key={r.path}
            />
          ))
        }
        <Redirect to={defaultRedirect} />
      </Switch>
    </div>
  </main>

);

export default TheMain;
