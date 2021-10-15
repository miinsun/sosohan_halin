import React from "react";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";
import TheMain from "./TheMain";

const TheLayout = () => (
  <div className="body-wrapper d-flex flex-column h-100">
    <div className="body-content">
      <TheHeader />
      <TheMain />
    </div>
    <TheFooter />
  </div>
);

export default TheLayout;
