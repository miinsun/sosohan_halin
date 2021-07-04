import React from "react";
import TheHeader from "./TheHeader";
import TheMain from "./TheMain";
import TheFooter from "./TheFooter";

const App = () => (
  <div className="d-flex flex-column h-100">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
);

export default App;
