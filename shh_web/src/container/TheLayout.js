import React from "react";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";
import TheMain from "./TheMain";

const TheLayout = () => (
  <div className="d-flex flex-column h-100">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
);

export default TheLayout;
