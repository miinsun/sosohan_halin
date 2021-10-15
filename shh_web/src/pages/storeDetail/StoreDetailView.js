/* eslint-disable import/no-named-as-default */
import React from "react";
import { Link } from "react-router-dom";
import { CTOneButton } from "../../components";
import StoreInformationView from "./components/StoreInformationView";

const StoreDetailView = ({ store }) => (

  <div>
    <StoreInformationView store={store} />
    <Link to={{
      pathname: "/linksuggest",
      state: {
        receiver: store,
      },
    }}
    >
      <CTOneButton type="button" title="제안하기" />
    </Link>

  </div>
);

export default StoreDetailView;
