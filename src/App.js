import React from "react";
import TheHeader from "./TheHeader";
import TheMain from "./TheMain";
import TheFooter from "./TheFooter";
import LinkReceptionHistory from "./LinkReceptionHistory/LinkReceptionHistory";

const App = () => (
  <div className="d-flex flex-column h-100">
    <TheHeader />
    <TheMain />
    <LinkReceptionHistory />
    <TheFooter />
  </div>
);

export default App;
